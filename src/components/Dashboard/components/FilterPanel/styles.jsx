import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: "5px 0px 5px 10px",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(0.5),
		},
	},
}));
