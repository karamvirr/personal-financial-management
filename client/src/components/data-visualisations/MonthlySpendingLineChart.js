import { Chart } from 'react-google-charts';
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const { formatCurrency } = require('../../utils/helpers');

// Returns the arrow component to display based on the current month's spending
// compared to the previous month's spending.
//
// @param {number} currentMonthAmount - amount spent for the current month
// @param {number} previousMonthAmount - amount spent for the previous month
// @returns {object} - the arrow component
const buildArrow = (currentMonthAmount, previousMonthAmount) => {
  if (currentMonthAmount > previousMonthAmount) {
    return <FaArrowCircleUp className='text-red-500' />;
  } else if (currentMonthAmount < previousMonthAmount) {
    return <FaArrowAltCircleDown className='text-green-500' />;
  }
  return null;
};

// Returns the spending data for the most recent day in the current month that
// has transaction data. For example, if the most recent day with transactions
// for the current month is the 15th, then this function will return the spending data
// for the 15th, including the total amount spent for the 15th of the current month and
// the 15th of the previous month.
//
// Assumes chartData is not empty and is ordered by date in ascending order.
//
// @param {object} chartData - { 1: { previousMonth: ..., currentMonth: ... }}
// @returns {array} - [previousMonthAmount, currentMonthAmount]
const mostRecentSpendingData = chartData => {
  // index for the first day of the current month that has no transactions
  const firstNullIndex = Object.entries(chartData).find(
    element => element[1].currentMonth === null
  )[0];

  const lastNotNullIndex = firstNullIndex - 1 > 1 ? firstNullIndex - 1 : 1;
  return Object.values(chartData[lastNotNullIndex]);
};

// Populates chartData with the total spending for each day of the month.
//
// @param {object} chartData - { 1: { previousMonth: ..., currentMonth: ... }}
// @param {array} transactionData - [{ date: ..., amount: ..., name: ... }]
// @param {boolean} isCurrentMonthData - true if data is for current month,
//                                       false otherwise
const populateChartData = (chartData, transactionData, isCurrentMonthData) => {
  const key = isCurrentMonthData ? 'currentMonth' : 'previousMonth';
  let mostRecentTransactionDay = 0;
  transactionData.forEach(transaction => {
    // format: YYYY-MM-DD
    const date = transaction.date;
    const amount = transaction.amount;
    const day = +date.split('-')[2];
    mostRecentTransactionDay = Math.max(mostRecentTransactionDay, day);
    const name = transaction.name;
    if (
      amount > 0 &&
      !name.startsWith('Transfer From') &&
      !transaction.pending
    ) {
      if (!chartData[day][key]) {
        chartData[day][key] = 0;
      }
      chartData[day][key] += amount;
    }
  });

  let total = 0;
  for (let i = 1; i <= 31; i++) {
    if (!isCurrentMonthData || i <= mostRecentTransactionDay) {
      if (chartData[i][key]) {
        total += chartData[i][key];
      }
      chartData[i][key] = total;
    }
  }
};

const MonthlySpendingLineChart = ({ data }) => {
  // data is in the format: { 'YYYY-MM': [transactions] }

  const sortedData = Object.entries(data).sort(
    (a, b) => new Date(b[0]) - new Date(a[0])
  );

  if (
    sortedData.length < 2 ||
    sortedData[0][1].length === 0 ||
    sortedData[1][1].length === 0
  ) {
    return <p className='my-5 text-center text-gray-500'>No data available</p>;
  }

  const currentMonthData = sortedData[0];
  const previousMonthData = sortedData[1];

  let parsedData = {};
  for (let i = 1; i <= 31; i++) {
    parsedData[i] = { previousMonth: null, currentMonth: null };
  }

  populateChartData(parsedData, currentMonthData[1], true);
  populateChartData(parsedData, previousMonthData[1], false);

  let lineChartData = Object.entries(parsedData).map(([date, data]) => {
    return [date, data.previousMonth, data.currentMonth];
  });
  lineChartData.unshift(['Day', 'Last Month', 'Current Month']);

  let color = 'blue';
  const [previousMonthAmount, currentMonthAmount] =
    mostRecentSpendingData(parsedData);
  if (currentMonthAmount > previousMonthAmount) {
    color = 'red';
  } else if (currentMonthAmount < previousMonthAmount) {
    color = 'green';
  }

  return (
    <div>
      {previousMonthAmount && currentMonthAmount && (
        <div className='px-5 pt-1.5'>
          <p className='mb-1 text-2xl font-bold'>
            {formatCurrency(currentMonthAmount)}
          </p>
          <div className='flex flex-row items-center gap-1.5'>
            {buildArrow(currentMonthAmount, previousMonthAmount)}
            <p className='text-sm font-semibold'>
              <span className='font-semibold'>
                {formatCurrency(
                  Math.abs(currentMonthAmount - previousMonthAmount)
                )}
              </span>
              <span className='text-gray-500'>
                {currentMonthAmount > previousMonthAmount ? ' more ' : ' less '}
                than this time last month
              </span>
            </p>
          </div>
        </div>
      )}
      <Chart
        width='100%'
        height='400px'
        chartType='LineChart'
        data={lineChartData}
        options={{
          legend: { position: 'bottom' },
          series: {
            // previous month spending line
            0: { color: 'gray', lineDashStyle: [4, 4], lineWidth: 1 },
            // current month spending line
            1: { color: color, lineWidth: 3 }
          },
          vAxis: {
            format: 'currency'
          }
        }}
      />
    </div>
  );
};

export default MonthlySpendingLineChart;
