import React, { useState } from "react";
import { Table, Loader } from "semantic-ui-react";

import Modal from "./Modal";
import Paginate from "./Paginate";
import { getStatusLabel, getFormattedDate } from "../utils/index";
import _ from "lodash";

function LaunchList({
	isLoading,
	launches,
	activePage,
	setActivePage,
	launchCount,
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [launch, setLaunch] = useState({});
	const handleClose = () => setModalIsOpen(false);

	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunch(launch);
	};
	//   const rows = _.map(launches, (launch) => {
    //             return [{
    //             column: 'Flight No.',
    //             value: launch.flight_number
    //           }, {
    //             column: 'Mission',
    //             value: launch.mission_name
    //           }, {
    //             column: 'Orbit',
    //             value: launch.rocket.second_stage.payloads[0].orbit
    //           }, {
    //             column: 'Rocket',
    //             value: launch.rocket.rocket_name
    //           },{
    //             column: 'launched (UTC)',
    //             value: getFormattedDate(launch.launch_date_utc)
    //           }, {
    //             column: 'Status',
    //             render: () => {
    //               return (
    //                 <div>
    //                   <p style={{ background:'#16BA49' }}>{getStatusLabel(launch.launch_success)}</p>
    //                 </div>
    //               )
    //             }
    //           }
    //         ]})
            
              const headers = [
                {
                  label: 'Flight No.',
                  align: 'right'
                  },
                  {
                  label: 'Mission',
                  align: 'right'
                  },
                  {
                  label: 'Orbit',
                  align: 'right'
                  },
                  {
                  label: 'Rocket',
                  align: 'right'
                  },
                  {
                  label: 'launched (UTC)',
                  align: 'right'
                  },
                  {
                  label: 'Status',
                  align: 'right'
                  }
              ]

	return (
		<>
			{modalIsOpen ? (
				<Modal
					modalStatus={modalIsOpen}
					handleClose={handleClose}
					launch={launch}
				/>
			) : (
				""
			)}
			{!isLoading ? (
				<>
					<div className="table-container">
						{launches.length ? (
							<Table style={{margin:'auto'}}>
								<Table.Header>
									<Table.Row>
										{
											_.map(headers, header =>{
												return(
													<Table.HeaderCell className="table-heading-small">
														{header.label}
													</Table.HeaderCell>
												)
											})
										}
									</Table.Row>
								</Table.Header>

								<Table.Body>
									{launches.map((launch) => {
										return (
											<Table.Row
												key={launch.flight_number}
												onClick={() =>
													handleEvents(launch)
												}
											>
												<Table.Cell>
													{launch.flight_number}
												</Table.Cell>
												<Table.Cell>
													{launch.mission_name}
												</Table.Cell>
												<Table.Cell>
													{
														launch.rocket
															.second_stage
															.payloads[0].orbit
													}
												</Table.Cell>
												<Table.Cell>
													{launch.rocket.rocket_name}
												</Table.Cell>

												<Table.Cell>
													{getFormattedDate(
														launch.launch_date_utc
													)}
												</Table.Cell>
												<Table.Cell>
													{getStatusLabel(
														launch.launch_success
													)}
												</Table.Cell> 
											</Table.Row>
										);
									})}
								</Table.Body>
							</Table>
						) : (
							<div className="center-image">
								<img
									src="https://thumbs.dreamstime.com/b/error-page-not-found-glitch-effect-style-vector-distorted-horizontal-glitched-lines-neon-glowing-typography-dark-203421762.jpg"
									alt="404"
									width="600"
									height="500"
								/>
							</div>
						)}
					</div>
					<Paginate
						activePage={activePage}
						setActivePage={setActivePage}
						launchCount={launchCount}
					/>
				</>
			) : (
				<div className="table-container">
					<Loader active inverted inline="centered" size="big" />
				</div>
			)}
		</>
	);
}

export default LaunchList;
