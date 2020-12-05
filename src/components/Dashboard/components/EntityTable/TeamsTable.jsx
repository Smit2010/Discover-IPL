import React from "react";
import { TableBody, TableCell, TableRow } from "@material-ui/core";

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
				.slice((props.page - 1) * 10, (props.page - 1) * 10 + 10)
				.map((row, index) => {
					const labelId = `enhanced-table-checkbox-${index}`;

					return (
						<TableRow hover tabIndex={-1} key={row.team}>
							<TableCell
								component="th"
								id={labelId}
								scope="row"
								align="left"
							>
								{row.team}
							</TableCell>
							<TableCell align="left">
								{row.home_wins ? row.home_wins : "-"}
							</TableCell>
							<TableCell align="left">
								{row.away_wins ? row.away_wins : "-"}
							</TableCell>
							<TableCell align="left">
								{row.home_matches ? row.home_matches : "-"}
							</TableCell>
							<TableCell align="left">
								{row.away_matches ? row.away_matches : "-"}
							</TableCell>
							<TableCell align="left">
								{row.home_win_percentage
									? row.home_win_percentage.toFixed(2)
									: "-"}
							</TableCell>
							<TableCell align="left">
								{row.away_win_percentage
									? row.away_win_percentage.toFixed(2)
									: "-"}
							</TableCell>
						</TableRow>
					);
				})}
		</TableBody>
	);
};

export default TeamsTable;
