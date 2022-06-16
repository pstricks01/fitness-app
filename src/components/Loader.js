import React from "react";
import { Stack } from "@mui/material";
import { Triangle } from "react-loader-spinner";

const Loader = () => (
	<Stack
		direction="row"
		justifyContent="center"
		alignItems="center"
		width="100%"
	>
		{/* <InfinitySpin color="red" /> */}
		<Triangle ariaLabel="loading-indicator" color="red" />
	</Stack>
);

export default Loader;
