import React from 'react';

const Article= ({ name, text}) => {
	return (
		<article>
			<p>{name}</p>
			<div>{text}</div>
		</article>
	)
}

export default Article;