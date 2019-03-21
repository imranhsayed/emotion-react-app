import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import colors from './colors/colors';

const Container = styled( 'header' )`
  background-color: ${ colors.dark };
  position: sticky;
  top: 0;
  
  span {
 	color: ${ colors.primary };
  }
`;

const NavLink = styled( Link )`

	color: #fff;
	
	&:hover {
	color: ${ colors.primary };
	}
`;

export default class NavBar extends React.Component {
	render() {
		return(
			<Container>
				<NavLink to="/">Home</NavLink>
				<span>Test</span>
			</Container>
		)
	}
}