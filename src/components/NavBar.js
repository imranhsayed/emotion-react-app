import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import colors from './colors/colors';

// These styles will be applied to all the elements inside this component
injectGlobal`
 * {
 	box-sizing: border-box;
 }
`;

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