import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
	a, .navbar-brand, .navbar-nav .navbar-link {
		color: #adb1b8;
		&:hover {
			color: white
		}
	}
`

export default function NaviBar() {
	
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
	<>
		<Styles>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>ZamAV Negativ Blog</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link><Link to="/">Home</Link></Nav.Link>
							<Nav.Link><Link to="/users">Users</Link></Nav.Link>
							<Nav.Link><Link to="/about">About</Link></Nav.Link>
						</Nav>
						<Nav>
							<Button variant="primary" className="mr-2" onClick={handleShow}>Войти</Button>
							<Button variant="primary" onClick={handleShow}>Регистрация</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Styles>	
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Регистрация</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="fromBasicEmail">
						<Form.Label>Адрес электронной почты</Form.Label>
						<Form.Control type="email" placeholder="Введите email" />
						<Form.Text className="text-muted">Мы никогда ни с кем не будем делиться вашей электронной почтой</Form.Text>
					</Form.Group>
					<Form.Group controlId="fromBasicPassword">
						<Form.Label>Пароль</Form.Label>
						<Form.Control type="password" placeholder="Введите пароль" />
					</Form.Group>
					<Form.Group controlId="fromBasicCheckbox">
						<Form.Check type="checkbox" label="Запомнить меня" />
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	</>
	)
}





























