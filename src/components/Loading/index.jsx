import React from "react";
import { CircularProgress } from "@material-ui/core";

const LoadingComponent = () => {
	return (
		<div
			style={{
				height: "100vh",
				minWidth: "100vh",
				display: "flex",
                flexDirection: "column",
                alignItems: "center",
				justifyContent: "center",
			}}
		>
			<CircularProgress color="secondary" />
		</div>
	);
};

export default LoadingComponent;
