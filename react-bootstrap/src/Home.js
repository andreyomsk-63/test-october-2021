import React from 'react';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import blog_00 from './img/blog_00.jpg';
import blog_11 from './img/blog_11.jpg';
import blog_12 from './img/blog_12.jpg';
import blog_14 from './img/blog_14.jpg';
import blog_21 from './img/blog_21.jpg';

export const Home = () => (
	<>
		<Slider />
		<Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
			<Row>
				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img variant="top" src={blog_11}/>
						<Card.Body>
							<Card.Title>ZamAV Negativ Blog</Card.Title>
							<Card.Text>
								«Слюни текут, бесконтрольные испражнения и красная сыпь по всему телу»
							</Card.Text>
							<Button variant="primary">Подробнее</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img variant="top" src={blog_12}/>
						<Card.Body>
							<Card.Title>ZamAV Negativ Blog</Card.Title>
							<Card.Text>
								«Все против нас, только ветер навстречу»
							</Card.Text>
							<Button variant="primary">Подробнее</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{width: '18rem'}}>
						<Card.Img variant="top" src={blog_14}/>
						<Card.Body>
							<Card.Title>ZamAV Negativ Blog</Card.Title>
							<Card.Text>
								«С нарушением не согласен. Права и обязанности не разъяснены...»
							</Card.Text>
							<Button variant="primary">Подробнее</Button>
						</Card.Body>
					</Card>
				</Col>
				
			</Row>
		</Container>
		<Jumbotron/>
		<Container style={{ marginBottom: '30px'}}>
			<Row>
				<Col md={7}>
					<img src={blog_21} height={400} alt="Second slide" />
				</Col>
				<Col md={5}>
					<h3>ZamyshevskiyAV Negativ Blog</h3>
					<p>У нас всё так - медведи на улицах, водка прямо на завтрак, матрёшки в доме и
					все поголовно играют на балалайках...</p>
					<p>А Гагарин погиб по время полета на Марс, ученые плохо посчитали орбиту вокруг трех слонов и 
					черепахи и он наткнулся на хрустальный небесный свод. 
					Народу потом сказали, что, он типа, на самолете тренировался.</p>
				</Col>
			</Row>
		</Container>
	</>
)


















