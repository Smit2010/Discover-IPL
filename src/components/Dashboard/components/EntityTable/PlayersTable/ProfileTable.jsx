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

const ProfileTable = (props) => {
	const row = props.row;
	return (
		<TableRow>
			<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
				<Collapse in={props.open} timeout="auto" unmountOnExit>
					<Box margin={1}>
						<Typography variant="h6" gutterBottom component="div">
							Profile
						</Typography>
						<Table size="small" aria-label="profile">
							<TableHead>
								<TableRow>
									<TableCell align="left">DOB</TableCell>
									<TableCell align="left">Country</TableCell>
									<TableCell align="left">
										Batting Hand
									</TableCell>
									<TableCell align="left">
										Bowling Skill
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow key={row.batsman}>
									<TableCell
										align="left"
										component="th"
										scope="row"
									>
										{row.profile.dob
											? row.profile.dob
											: "-"}
									</TableCell>
									<TableCell align="left">
										{row.profile.country
											? row.profile.country
											: "-"}
									</TableCell>
									<TableCell align="left">
										{row.profile.batting_hand
											? row.profile.batting_hand
											: "-"}
									</TableCell>
									<TableCell align="left">
										{row.profile.bowling_skill
											? row.profile.bowling_skill
											: "-"}
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

export default ProfileTable;
