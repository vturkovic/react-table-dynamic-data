import { TableColumnInterface } from "../interfaces";

const DEFAULT_COLUMN_WIDTH = 200;

export const tableColumnData: TableColumnInterface[] = [
    {
        Header: "userId",
        accessor: "userId",
        width: DEFAULT_COLUMN_WIDTH,
    },
    {
        Header: "measure",
        accessor: "measure",
        width: DEFAULT_COLUMN_WIDTH,
    },
    {
        Header: "id",
        accessor: "id",
        width: DEFAULT_COLUMN_WIDTH,
    },
    {
        Header: "title",
        accessor: "title",
        width: DEFAULT_COLUMN_WIDTH,
    },
    {
        Header: "body",
        accessor: "body",
        width: DEFAULT_COLUMN_WIDTH,
    }
];