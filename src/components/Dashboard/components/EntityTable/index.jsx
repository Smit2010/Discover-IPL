import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	Paper,
	Grid,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import PlayersTable from "./PlayersTable";
import TeamsTable from "./TeamsTable";
import MatchesTable from "./MatchesTable";
import { useStyles } from "./styles";

const EnhancedTableHead = (props) => {
	const { classes, order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{props.headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={"left"}
                        sortDirection={orderBy === headCell.id ? order : false}
					>
						{headCell.sortable ? (
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={
									orderBy === headCell.id ? order : "asc"
								}
								onClick={createSortHandler(headCell.id)}
							>
								{headCell.label}
								{orderBy === headCell.id ? (
									<span className={classes.visuallyHidden}>
										{order === "desc"
											? "sorted descending"
											: "sorted ascending"}
									</span>
								) : null}
							</TableSortLabel>
						) : (
							headCell.label
						)}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const EntityTable = (props) => {
	const classes = useStyles();
	const [order, setOrder] = React.useState("desc");
	const [orderBy, setOrderBy] = React.useState("");
	const [page, setPage] = React.useState(1);

	useEffect(() => {
		setOrderBy(props.filter);
	}, [props.filter]);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div>
			<Paper className={classes.paper}>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size="medium"
						aria-label="team table"
					>
						<EnhancedTableHead
							headCells={props.headCells}
							classes={classes}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={props.data.length}
						/>
						{props.entity === "Players" ? (
							<PlayersTable
								order={order}
								orderBy={orderBy}
								page={page}
							/>
						) : props.entity === "Teams" ? (
							<TeamsTable
								order={order}
								orderBy={orderBy}
								page={page}
							/>
						) : (
							<MatchesTable
								order={order}
								orderBy={orderBy}
								page={page}
							/>
						)}
					</Table>
				</TableContainer>
				<Grid
					item
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "row",
						padding: 10,
					}}
				>
					<Pagination
						showFirstButton={true}
						showLastButton={true}
						count={Math.ceil(
							props.data.length /
								(props.entity === "matches" ? 6 : 10)
						)}
						shape="rounded"
						page={page}
						onChange={handleChangePage}
					/>
				</Grid>
			</Paper>
		</div>
	);
};

export default EntityTable;
