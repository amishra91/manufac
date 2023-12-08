import '../../App.css';

interface Props {
  data: {
    class: string;
    mean: number;
    median: number;
    mode: number;
  }[];
}

const Table = ({ data }: Props) => (
  <table>
    <thead>
      <tr>
        <th>Measure</th>
        {data.map(({ class: alcoholClass }) => (
          <th key={alcoholClass}>{`Class ${alcoholClass}`}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Flavanoids Mean</td>
        {data.map(({ mean }) => (
          <td key={mean}>{mean.toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <td>Flavanoids Median</td>
        {data.map(({ median }) => (
          <td key={median}>{median.toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <td>Flavanoids Mode</td>
        {data.map(({ mode }) => (
          <td key={mode}>{mode.toFixed(3)}</td>
        ))}
      </tr>
    </tbody>
  </table>
);

export default Table;
