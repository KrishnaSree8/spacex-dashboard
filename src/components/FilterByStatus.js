import React from "react";
import  Dropdown  from "./dropdown";

const launchStatuses = [
	{
		label: "All",
		text: "All ",
		value: "All",
	},
	{
		label: "Successful",
		text: "Successful",
		value: true,
	},
	{
		label: "Failed",
		text: "Failed",
		value: false,
	},
];

function FilterByStatus({ status, setStatus }) {
	const handleChange = (e) => {
		setStatus(e.target.value);
	};
	return (
		<div className="status-filter">
			<Dropdown
				title="Launch Status"
				list= {launchStatuses}
				value={status}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByStatus;
