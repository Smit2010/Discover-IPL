import React from "react";
import {
	PlayersFilter,
	TeamsFilter,
	MatchesFilter,
} from "../../../../utils/filterAttributes";

const EntityFilter = React.lazy(() => import("./EntityFilter"));

const FilterPanel = (props) => {
	return (
		<>
			<EntityFilter
				entity="Players"
				filters={PlayersFilter}
				handleFilterChange={(value) => props.handleFilterChange(value)}
			/>
			<EntityFilter
				entity="Teams"
				filters={TeamsFilter}
				handleFilterChange={(value) => props.handleFilterChange(value)}
			/>
			<EntityFilter
				entity="Matches"
				filters={MatchesFilter}
				handleFilterChange={(value) => props.handleFilterChange(value)}
			/>
		</>
	);
};

export default FilterPanel;
