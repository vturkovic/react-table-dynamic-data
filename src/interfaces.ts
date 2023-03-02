export interface TableColumnInterface {
    Header: string,
    accessor: string
}

export interface TableRowInterface {
    userId: number,
    measure: number,
    id?: number,
    title: string,
    body: string,
    naziv: string
}

export interface TableInterface {
    columns: TableColumnInterface[],
    data: TableRowInterface[] 
}

export interface MeasuresInterface {
    year: number,
    validMeasures: string[]
}

interface MeasureChangeInterface {
    from: string,
    to: string
}

export interface MeasureUpdatesInterface {
    year: string,
    measureChange: MeasureChangeInterface[]
}

export interface DataByYearInterface {
    [year: string]: TableRowInterface[];
}