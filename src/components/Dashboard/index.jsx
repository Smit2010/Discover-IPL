import React, { useEffect, useState, Suspense } from "react";
import { Grid } from "@material-ui/core";
import {
	teamHeadCells,
	playerHeadCells,
	matchHeadCells,
} from "../../utils/tableHead";
import Batsmen from "../../data/Batsmen";
import Matches from "../../data/Matches";
import Teams from "../../data/Teams";
import LoadingComponent from "../Loading";

const FilterPanel = React.lazy(() => import("./components/FilterPanel"));
const EntityTable = React.lazy(() => import("./components/EntityTable"));
const Navbar = React.lazy(() => import("../Navbar"));

const Dashboard = () => {
	const [entity, setEntity] = useState("");
	const [filter, setFilter] = useState("");
	const [data, setData] = useState([]);
	const [headCells, setHeadCells] = useState([]);

	useEffect(() => {
		if (entity === "Players") {
			setData(Batsmen);
			setHeadCells(playerHeadCells);
		} else if (entity === "Teams") {
			setData(Teams);
			setHeadCells(teamHeadCells);
		} else {
			setData(Matches);
			setHeadCells(matchHeadCells);
		}
	}, [entity]);

	const handleFilterChange = (value) => {
		console.log(value);
		setEntity(value.entity);
		setFilter(value.filter);
	};

	return (
		<Suspense fallback={<LoadingComponent />}>
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
		</Suspense>
	);
};

export default Dashboard;
