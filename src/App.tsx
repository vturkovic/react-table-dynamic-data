import './styles/App.css'; 
import { useState, ChangeEvent } from 'react';
import TableComponent from './components/tableComponent';
import { data_2021, data_2022 } from "./data/tableRowData";
import { tableColumnData } from './data/tableColumnData';
import { validMeasures } from './data/validMeasures';
import { measureUpdates } from './data/measureUpdates';
import { filterDataByValidMeasure, updateMeasures } from './service/helperService';
import { DataByYearInterface } from './interfaces';

/**
 * Define measure changes in ./data/measureUpdates 
 * Define valid measure for each year in ./data/validMeasures
 * Define year of data for each data in ./app dataByYear
 */

const App = () => {

  const [selectedYear, setSelectedYear] = useState('2021');

  /* Add more years and data arrays as needed */
  const dataByYear: DataByYearInterface = {
    '2021': data_2021,
    '2022': data_2022
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const updatedData = updateMeasures(dataByYear[selectedYear], measureUpdates, selectedYear);
  const tableRowData = filterDataByValidMeasure(updatedData, selectedYear, validMeasures);
  
  return (
    <div className='app'>
      <h2>Data for {selectedYear}</h2>
      <div className='select-container'>
        <label htmlFor="year-select">Select a year:</label>
        <select id="year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <TableComponent columns={tableColumnData} data={tableRowData} />
    </div>
  );
};

export default App;