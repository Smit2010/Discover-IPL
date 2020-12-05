import React, { useState } from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ProfileTable from "./ProfileTable";

const DataTable = (props) => {
	const [open, setOpen] = useState(false);
	const row = props.row;
	return (
		<>
			<TableRow
				hover
				tabIndex={-1}
				key={row.batsman}
				style={{ cursor: "pointer" }}
				onClick={() => setOpen(!open)}
			>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						disableRipple
					>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row" align="left">
					{row.batsman}
				</TableCell>
				<TableCell align="left">{row.total_runs}</TableCell>
				<TableCell align="left">{row.outs}</TableCell>
				<TableCell align="left">{row.number_of_balls}</TableCell>
				<TableCell align="left">
					{row.average ? row.average.toFixed(2) : "-"}
				</TableCell>
				<TableCell align="left">{row.strike_rate.toFixed(2)}</TableCell>
			</TableRow>
			<ProfileTable row={row} open={open} />
		</>
	);
};

export default DataTable;
