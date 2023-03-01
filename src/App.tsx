import './App.css'; 
import { useState, ChangeEvent } from 'react';
import TableComponent from './components/tableComponent';
import { data_2021, data_2022 } from "./data/tableRowData";
import { tableColumnData } from './data/tableColumnData';

const App = () => {

  const [selectedYear, setSelectedYear] = useState("2021");

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const data = selectedYear === "2021" ? data_2021 : data_2022;

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
      <TableComponent columns={tableColumnData} data={data} />
    </div>
  );
};

export default App;