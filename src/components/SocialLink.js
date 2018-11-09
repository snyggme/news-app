import React from 'react';

const SocialLink = ({ label, link }) => 
	<div key={label} className='social-links'>
		<a href={link} target='_blank'>
			{ label === 'web'
				? <i className={`fa fa-user`} aria-hidden="true"></i>
				: <i className={`fa fa-${label}`} aria-hidden="true"></i>
			}
		</a>
	</div>

export default SocialLink;