import SankeyDiagram from './SankeyDiagram';

const COLORS = [
  '#b2df8a',
  '#33a02c',
  '#a6cee3',
  '#1f78b4',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#ffff99',
  '#b15928'
];

const IncomeSankeyDiagram = ({ data }) => {
  return <SankeyDiagram data={data} colors={COLORS} />;
};

export default IncomeSankeyDiagram;
