import SankeyDiagram from './SankeyDiagram';

const COLORS = [
  '#a6cee3',
  '#1f78b4',
  '#b2df8a',
  '#33a02c',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#ffff99',
  '#b15928'
];

const ExpenseSankeyDiagram = ({ data }) => {
  return <SankeyDiagram data={data} colors={COLORS} />;
};

export default ExpenseSankeyDiagram;
