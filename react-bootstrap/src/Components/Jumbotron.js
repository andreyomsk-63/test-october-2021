import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
//import ocean from '../ocean.jpg';
import blog_00 from '../img/blog_00.jpg';
import styled from 'styled-components';

const Styles = styled.div `
	.jumbo {
		background: url(${blog_00}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 400px;
		position: relative;
		z-index: -2;
	}
	.overlay {
		background-color: #000;
		opacity: 0.5;
		position: absolute;
		top: 0;
		Left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;

const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h3>ZamyshevskiyAV Negativ Blog</h3>
				<p>В одной части света самые отмороженные зеки организовали страну, сделали из неё 
				конфетку и стали жить там поживать добропорядочными гражданами.
				А по законам физики, ровно в противоположной части света некие граждане решили, 
				что неча жить по правилам, и сделали из одной страны одну зону, с паханами, 
				быдлом и парашей...</p>
			</Container>
		</Jumbo>
	</Styles>
)

export default Jumbotron;







































