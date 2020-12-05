import React from "react";
import { TableBody } from "@material-ui/core";

const DataTable = React.lazy(() => import("./DataTable"));

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

const TeamsTable = (props) => {
	return (
		<TableBody>
			{stableSort(props.data, getComparator(props.order, props.orderBy))
				.slice((props.page - 1) * 6, (props.page - 1) * 6 + 6)
				.map((row) => {
					return <DataTable row={row} />;
				})}
		</TableBody>
	);
};

export default TeamsTable;
