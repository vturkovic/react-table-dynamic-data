import { TableRowInterface, MeasuresInterface, MeasureUpdatesInterface } from "../interfaces";

export const filterDataByValidMeasure = (data: TableRowInterface[], selectedYear: string, validMeasures: MeasuresInterface[]) => {

    const currYearValidMeasures = validMeasures
    .filter(measure => measure.year === parseInt(selectedYear))
    .map(measure => measure.validMeasures)
    .reduce((acc, curr) => acc.concat(curr), []);

    return data.filter(item => currYearValidMeasures.includes(item.measure.toString()));
};

export const updateMeasures = (data: TableRowInterface[], measureUpdates: MeasureUpdatesInterface[], yearOfData: string) => {

    const filteredMeasureChange = measureUpdates.filter(item => item.year === yearOfData)[0]?.measureChange;

    if (!filteredMeasureChange) {
      return data;
    }
  
    const updatedData = data.map(item => {
      const matchingMeasureChange = filteredMeasureChange.find(change => change.from === item.measure.toString());
  
      if (matchingMeasureChange) {
        return {
          ...item,
          measure: parseInt(matchingMeasureChange.to)
        }
      } else {
        return item;
      }
    });
  
    return updatedData;
};

export const getSupportNamesFromData = (data: TableRowInterface[]) => {
  const dataMaped = data.map(item => item.naziv);
  return dataMaped.filter((value, index) => dataMaped.indexOf(value) === index);
};

export const filterDataBySupportName = (data: TableRowInterface[], supportName: string) => {
  return data.filter(item => item.naziv === supportName);
};