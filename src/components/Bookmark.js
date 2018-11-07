import React from 'react';
import { Link } from 'react-router-dom';

const Bookmark = (props) => {
	const { id, name } = props;

	return (
		<div key={id} className='bookmark-block'>
			<Link to={`/news/${id}`}>
				{name}
			</Link>
			<i 
				className="fa fa-ban" 
				aria-hidden="true"
				onClick={props.deleteBookmark.bind(null, id)}>
			</i>
		</div>
	)
}

export default Bookmark;