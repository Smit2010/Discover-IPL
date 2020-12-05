import React from "react";
import { TableBody } from "@material-ui/core";
import { batsmen } from "../../../../../data/batsmen";
import DataTable from "./DataTable";

const descendingComparator = (a, b, orderBy) => {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
};

const getComparator = (order, orderBy) => {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
};

const PlayersTable = (props) => {
	return (
		<TableBody>
			{stableSort(batsmen, getComparator(props.order, props.orderBy))
				.slice((props.page - 1) * 10, (props.page - 1) * 10 + 10)
				.map((row, index) => {
					return <DataTable row={row} />;
				})}
		</TableBody>
	);
};

export default PlayersTable;
