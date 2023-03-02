export interface TableColumnInterface {
    Header: string,
    accessor: string
}

export interface TableRowInterface {
    userId: number,
    measure: number,
    naziv: string,
    id?: number,
    title: string,
    body: string,
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

export interface SideBarPropsInterface {
    items: string[],
    onItemClick: (item: string) => void;
}