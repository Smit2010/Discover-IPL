import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Toolbar, Typography, AppBar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";

const Navbar = () => {
	const classes = useStyles();
	return (
		<AppBar
			style={{ boxShadow: "none", backgroundColor: "#f64857" }}
            position="static"
		>
			<Toolbar>
				<Link
					to="/dashboard"
					replace={true}
					style={{ textDecoration: "none" }}
				>
					<Typography className={classes.title} variant="h5">
						<strong
							style={{
								color: "white",
							}}
						>
							Discover IPL
						</strong>
					</Typography>
				</Link>
				<div style={{ flexGrow: 1 }} />
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default withRouter(Navbar);
