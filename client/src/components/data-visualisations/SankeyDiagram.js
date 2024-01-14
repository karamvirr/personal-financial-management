import { Chart } from 'react-google-charts';

const SankeyDiagram = ({ data, colors }) => {
  return (
    <Chart
      chartType='Sankey'
      width='100%'
      height='500px'
      data={data}
      options={{
        sankey: {
          node: {
            label: {
              fontName: 'Roboto',
              fontSize: 11
            },
            colors: colors
          },
          link: {
            colorMode: 'gradient',
            colors: colors
          }
        },
        animation: {
          startup: true,
          easing: 'linear',
          duration: 1500
        }
      }}
      className='p-5'
    />
  );
};

export default SankeyDiagram;
