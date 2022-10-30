import React from "react";
// import { Dropdown } from "semantic-ui-react";
import  Dropdown  from "./dropdown";


const launchTimelines = [
	{
		label: "All ",
		text: "All Launches",
		value: "All",
	},
	{
		label: "Upcoming",
		text: "Upcoming Launches",
		value: "upcoming",
	},
	{
		label: "Past",
		text: "Past Launches",
		value: "past",
	},
];

function FilterByTimeline({ timeline, setTimeline }) {
	const handleChange = (e) => {
		setTimeline(e.target.value);
	};
	return (
		<div className="timeline-filter">
			<Dropdown
				title="Launch Timeline"
				// fluid
				// selection
				list={launchTimelines}
				value={timeline}
				default="All"
				//options={launchTimelines}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByTimeline;
