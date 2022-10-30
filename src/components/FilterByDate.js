import React from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from './datePicker'

function FilterByDate({ startDate, endDate, setStartDate, setEndDate }) {
	return (
		<div className="date-filter">
			<div className="text-align-center date-box">
				{/* <p className="filter-name-label ">Start Date</p> */}
				<DatePicker
					value={startDate}
					onChange={(date) => setStartDate(date)}
					label="Start Date"
					style= {{ color: 'white'}}
				/>
			</div>
			<div className="text-align-center date-box">
				{/* <p className="filter-name-label">End Date</p> */}
				<DatePicker
					value={endDate}
					onChange={(date) => setEndDate(date)}
					label="End Date"
				/>
			</div>
		</div>
	);
}

export default FilterByDate;
