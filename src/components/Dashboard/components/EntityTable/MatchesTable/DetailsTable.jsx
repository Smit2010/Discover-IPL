import React from "react";
import {
	TableBody,
	TableCell,
	TableRow,
	Collapse,
	Box,
	Typography,
	Table,
	TableHead,
} from "@material-ui/core";

const DetailsTable = (props) => {
	const row = props.row;
	return (
		<TableRow>
			<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
				<Collapse in={props.open} timeout="auto" unmountOnExit>
					<Box margin={1}>
						<Typography variant="h6" gutterBottom component="div">
							Details
						</Typography>
						<Table size="small" aria-label="details">
							<TableHead>
								<TableRow>
									<TableCell align="left">Date</TableCell>
									<TableCell align="left">
										Toss Winner
									</TableCell>
									<TableCell align="left">
										Toss Decision
									</TableCell>
									<TableCell align="left">
										1st Umpire
									</TableCell>
									<TableCell align="left">
										2nd Umpire
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow key={row.date}>
									<TableCell
										align="left"
										component="th"
										scope="row"
									>
										{row.date ? row.date : "-"}
									</TableCell>
									<TableCell align="left">
										{row.toss_winner
											? row.toss_winner
											: "-"}
									</TableCell>
									<TableCell align="left">
										{row.toss_decision
											? row.toss_decision
											: "-"}
									</TableCell>
									<TableCell align="left">
										{row.umpire1 ? row.umpire1 : "-"}
									</TableCell>
									<TableCell align="left">
										{row.umpire2 ? row.umpire2 : "-"}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Box>
				</Collapse>
			</TableCell>
		</TableRow>
	);
};

export default DetailsTable;
