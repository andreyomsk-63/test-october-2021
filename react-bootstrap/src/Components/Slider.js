import React from 'react';
import { Carousel } from 'react-bootstrap';
import blog_00 from '../img/blog_00.jpg';

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item style={{'height': '600px'}}>
				<img 
					className="d-block w-100"
					src={blog_00}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>ZamyshevskiyAV Negativ Blog</h3>
					<p>Счастье для всех, даром... и пусть никто не уйдет обиженный</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{'height': '600px'}}>
				<img 
					className="d-block w-100"
					src={blog_00}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>ZamyshevskiyAV Negativ Blog</h3>
					<p>Счастье для всех, даром... и пусть никто не уйдет обиженный</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{'height': '600px'}}>
				<img 
					className="d-block w-100"
					src={blog_00}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>ZamyshevskiyAV Negativ Blog</h3>
					<p>Счастье для всех, даром... и пусть никто не уйдет обиженный</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}








