import './styles/App.css'; 
import { useState, ChangeEvent } from 'react';
import TableComponent from './components/tableComponent/tableComponent';
import { DATA_2021, DATA_2022 } from "./data/tableRowData";
import { tableColumnData } from './data/tableColumnData';
import { validMeasures } from './data/validMeasures';
import { measureUpdates } from './data/measureUpdates';
import { filterDataByValidMeasure, updateMeasures, getSupportNamesFromData, filterDataBySupportName } from './service/helperService';
import { DataByYearInterface } from './interfaces';
import SidebarComponent from './components/sidebarComponent/sidebarComponent';

/**
 * Define measure changes in ./data/measureUpdates 
 * Define valid measure for each year in ./data/validMeasures
 * Define year of data for each data in ./app dataByYear
 */

const App = () => {

  /* Add more years and data arrays as needed */
  const dataByYear: DataByYearInterface = {
    '2021': updateMeasures(DATA_2021, measureUpdates, '2021'),
    '2022': updateMeasures(DATA_2022, measureUpdates, '2022')
  };

  const initYear = '2021';
  const initSupportName2021 = 'potpora za voće';
  const initSupportName2022 = 'potpora za domaće voće';

  const [selectedYear, setSelectedYear] = useState('2021');
  const [supportNames, setSupportNames] = useState(getSupportNamesFromData(dataByYear[selectedYear]));

  let initSupportName = initSupportName2021;
  const [tableRowData, setTableRowData] = useState(filterDataBySupportName(dataByYear[selectedYear], initSupportName));

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    const dataFilteredByValidMeasure = filterDataByValidMeasure(dataByYear[selectedYear], selectedYear, validMeasures);
    initSupportName = selectedYear === initYear ? initSupportName2021: initSupportName2022;
    setTableRowData(filterDataBySupportName(dataFilteredByValidMeasure, initSupportName));
    setSupportNames(getSupportNamesFromData(dataByYear[selectedYear]));
  };

  const sideItemClickHandler = (supportName: string) => {
    setTableRowData(filterDataBySupportName(dataByYear[selectedYear], supportName));
  };


  return (
    <div className='app'>
      <div className='sidebar-container'>
        <SidebarComponent items={supportNames} onItemClick={sideItemClickHandler}></SidebarComponent>
      </div>
      <div className='content-container'>
        <h2>Year: {selectedYear}</h2>
        <div className='select-container'>
          <label htmlFor="year-select">Select a year: </label>
          <select id="year-select" value={selectedYear} onChange={handleYearChange}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <TableComponent columns={tableColumnData} data={tableRowData} />
      </div>
    </div>
  );
};

export default App;