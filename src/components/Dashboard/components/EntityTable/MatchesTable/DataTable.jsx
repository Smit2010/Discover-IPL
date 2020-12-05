import React, { useState } from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const DetailsTable = React.lazy(() => import("./DetailsTable"));

const DataTable = (props) => {
	const [open, setOpen] = useState(false);
	const row = props.row;
	return (
		<>
			<TableRow
				hover
				tabIndex={-1}
				key={row.team}
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
					{row.season}
				</TableCell>
				<TableCell align="left">{row.team1}</TableCell>
				<TableCell align="left">{row.team2}</TableCell>
				<TableCell align="left">{row.venue}</TableCell>
				<TableCell align="left">{row.city ? row.city : "-"}</TableCell>
				<TableCell align="left">
					{row.winner ? row.winner : "No Result"}
				</TableCell>
				<TableCell align="left">{row.win_by_runs}</TableCell>
				<TableCell align="left">{row.win_by_wickets}</TableCell>
				<TableCell align="left">
					{row.player_of_match ? row.player_of_match : "-"}
				</TableCell>
			</TableRow>
			<DetailsTable row={row} open={open} />
		</>
	);
};

export default DataTable;
