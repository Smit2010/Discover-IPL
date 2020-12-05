import React from "react";
import { Chip, Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

const EntityFilter = (props) => {
	const classes = useStyles();
	const handleClick = (value) => {
		props.handleFilterChange({ entity: props.entity, filter: value });
	};
	return (
		<Grid container item>
			<Grid item xs={12}>
				<Typography style={{ margin: "5px 0px 5px 10px" }} variant="h6" color="textPrimary">
					{props.entity}
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.root}>
				{props.filters.map((item) => {
					return (
						<Chip
                            style={{backgroundColor: "#ad0c45"}}
							label={item.label}
							onClick={() => handleClick(item.value)}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default EntityFilter;
