import './App.css';

import { calculateGamma, getClassWiseStatistics } from './utils/index';
import { WineData } from './types';
import data from './data.json';

import Table from './components/Table/index';

const dataset: WineData[] = data;

function App() {
  const flavanoidsData = getClassWiseStatistics(dataset, 'Flavanoids');
  const gammaData = getClassWiseStatistics(dataset, calculateGamma);

  console.log('flavanoidsData=', flavanoidsData);
  console.log('gammaData=', gammaData);
  return (
    <div className="App">
      <div>
        <h2>Flavanoids Table</h2>
        <Table data={flavanoidsData} tableType="Flavanoids" />

        <h2>Gamma Table</h2>
        <Table data={gammaData} tableType="Gamma" />
      </div>
    </div>
  );
}

export default App;
