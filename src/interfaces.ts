export interface TableColumnInterface {
    Header: string,
    accessor: string,
    width: number
}

export interface TableRowInterface {
    userId: number,
    measure: number,
    id?: number,
    title: string,
    body: string
}


export interface TableInterface {
    columns: TableColumnInterface[],
    data: TableRowInterface[] 
}