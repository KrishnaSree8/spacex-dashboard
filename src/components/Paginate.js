import React from "react";
// import { Pagination } from "semantic-ui-react";
import Pagination from '@material-ui/lab/Pagination';

function Paginate({ activePage, setActivePage, launchCount }) {

		
	const handlePageChange = (event, newPage) => {
		console.log(event, newPage)
		setActivePage(newPage);
		
		//onchange(e.target.value)
	};
	
	return (
		<>
			{launchCount > 10 ? (
				<div className="pagination-container">
					<Pagination
						variant="outlined" 
						shape="rounded"
						color="primary"
						boundaryRange={3}
						defaultActivePage={1}
						count={Math.ceil(launchCount / 10)}
						onChange={handlePageChange}
						page={activePage}
						style={{color:'#56F5CB', pading: 10}}
					/>
				</div>
			) : (
				""
			)}
		</>
	);


	// const handlePageChange = (e, { activePage }) => {
	// 	setActivePage(activePage);
	// 	console.log(activePage, e)
	// };
	// return (
	// 	<>
	// 		{launchCount > 10 ? (
	// 			<div className="pagination-container">
	// 				<Pagination
	// 					boundaryRange={3}
	// 					defaultActivePage={1}
	// 					size="tiny"
	// 					siblingRange={1}
	// 					totalPages={Math.ceil(launchCount / 10)}
	// 					onPageChange={handlePageChange}
	// 					activePage={activePage}
	// 					firstItem={null}
	// 					prevItem={null}
	// 					nextItem={null}
	// 					style={{background:'#56F5CB' ,color:'black', pading: 10}}
	// 				/>
	// 			</div>
	// 		) : (
	// 			""
	// 		)}
	// 	</>
	// );
}

export default Paginate;




