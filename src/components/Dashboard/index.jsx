import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Grid } from "@material-ui/core";
import FilterPanel from "./components/FilterPanel";
import EntityTable from "./components/EntityTable";
import { batsmen } from "../../data/batsmen";
import { matches } from "../../data/matches";
import { teams } from "../../data/teams";
import {
	teamHeadCells,
	playerHeadCells,
	matchHeadCells,
} from "../../utils/tableHead";

const Dashboard = () => {
	const [entity, setEntity] = useState("");
	const [filter, setFilter] = useState("");
	const [data, setData] = useState([]);
	const [headCells, setHeadCells] = useState([]);

	useEffect(() => {
		if (entity === "Players") {
			setData(batsmen);
			setHeadCells(playerHeadCells);
		} else if (entity === "Teams") {
			setData(teams);
			setHeadCells(teamHeadCells);
		} else {
			setData(matches);
			setHeadCells(matchHeadCells);
		}
	}, [entity]);

	const handleFilterChange = (value) => {
		console.log(value);
		setEntity(value.entity);
		setFilter(value.filter);
	};

	return (
		<>
			<Navbar />
			<Grid container style={{ marginTop: 20 }}>
				<Grid item xs={1} />
				<Grid item container xs={10} spacing={4}>
					<Grid item xs={3}>
						<FilterPanel handleFilterChange={handleFilterChange} />
					</Grid>
					<Grid item xs={9}>
						<EntityTable
							filter={filter}
							entity={entity}
							data={data}
							headCells={headCells}
						/>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
