import React from 'react';
import { Link } from '@reach/router';

export default class NavBar extends React.Component {
	render() {
		return(
			<header>
				<Link to="/">Home</Link>
			</header>
		)
	}
}