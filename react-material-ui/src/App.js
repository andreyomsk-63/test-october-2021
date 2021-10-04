import React from 'react';
import Button from '@material-ui/core/Button';
import { 
	AppBar,  Container, Toolbar, IconButton, Typography, 
	Box, Paper, Grid, Card, CardMedia, CardContent, CardActions 
} from '@material-ui/core';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(1)
	},
	title: {
		flexGrow: 1
	},
	mainFeaturesPost: {
		position: "relative",
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundOverlay: "rgba(0,0,0,.3)"
	},
	mainFeaturesPostContent: {
		position: "relative",
		padding: theme.spacing(6),
		marginTop: theme.spacing(8)
	},
	cardMedia: {
		paddingTop: "56.25%"
	},
	cardContent: {
		flexGrow: 1
	},
	cardGrid: {
		marginTop: theme.spacing(4)
	}
})) 

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
	const classes = useStyles();
	const [value, setValue] = React.useState("recents")
	
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	
	const [open, setOpen] = React.useState(false);
	
	const handleClickOpen = () => {
		setOpen(true);
	}
	
	const handleClose = () => {
		setOpen(false);
	}
	
	return (
		<>
		<AppBar position="fixed">
			<Container fixed>
				<Toolbar>
					<IconButton edge="start" 
					color="inherit" aria-label="menu" className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>ZamAV Positiv Blog</Typography>
					<Box mr={3}>
						<Button color="inherit" variant="outlined" onClick={handleClickOpen}>Войти</Button>
						
						<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
							<DialogTitle id="form-dialog-title">Войти</DialogTitle>
							<DialogContent>
								<DialogContentText>Авторизуйтесь, чтобы посмотреть видео</DialogContentText>
								<TextField 
									autoFocus
									margin="dense"
									id="name"
									label="Адрес эл.почты"
									type="email"
									fullWidth
								/>
								<TextField 
									autoFocus
									margin="dense"
									id="pass"
									label="Пароль"
									type="password"
									fullWidth
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color="primary">Отмена</Button>
								<Button onClick={handleClose} color="primary">Войти</Button>
							</DialogActions>
						</Dialog>
						
					</Box>
					<Button color="secondary" variant="contained">Регистрация</Button>
				</Toolbar>
			</Container>
		</AppBar>
		
		<main>
			<Paper className={classes.mainFeaturesPost}
			style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
				<Container fixed>
					<div className={classes.overlay} />
					<Grid container>
						<Grid item md={6}>
						
							<div className={classes.mainFeaturesPostContent}>
								<Typography
									component="h1"
									variant="h3"
									color="inherit"
									gutterBottom
								>
									ZamAV Positiv Blog
								</Typography>
								<Typography
									component="h5"
									color="inherit"
									paragraph
								>
									Очистка кармы можно эффективно проводить в домашних условиях самостоятельно.
									Самый лучший способ очистки — обработать её спиртом.
									Для полной чистки кармы от всех негативных, переданных по наследству, программ 
									может потребоваться около недели времени.
								</Typography>
								<Button variant="contained" color="secondary">
									ПОДРОБНЕЕ
								</Button>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Paper>
			<div className={classes.mainContent}>
				<Container maxWidth="md">
					<Typography
						variant="h2"
						color="textPrimary"
						align="center"
						gutterBottom
					>
						ZamAV Positiv Blog
					</Typography>
					<Typography
						variant="h5"
						color="textSecondary"
						align="center"
						paragraph
					>
						Когнитивный диссонанс (от англ. слов: cognitive — «познавательный» и dissonance
						— «отсутствие гармонии») — состояние психического дискомфорта индивида, 
						вызванное столкновением в его сознании конфликтующих представлений: идей, 
						верований, ценностей или эмоциональных реакций.
					</Typography>
					<div className={classes.mainButtons}>
						<Grid container spacing={5} justify="center">
							<Grid item>
								<Button variant="contained" color="primary">НаЧАТЬ СЕЙЧАС</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">ПОДРОБНЕЕ</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia 
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography variant="h5" gutterBottom>
										Содержание блога
									</Typography>
									<Typography>
										Поздний вечер... С кухни слышатся шорохи в холодильнике, 
										скрытое торопливое чавканье... и вздохи запоздалого раскаяния... 
										Стыдно??? Не переживай! Так худеют миллионы...
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										Смотреть
									</Button>
									<Button size="small" color="primary">
										Редактировать
									</Button>
									
									<LayerIcon />
									<PlayCircleFilledIcon />
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</main>
		<footer>
			<Typography variant="h6" align="center" gutterBottom>
				Footer
			</Typography>
			<BottomNavigation
				value={value}
				noChange={handleChange}
				className={classes.root}
			>
				<BottomNavigationAction 
					label="Recents"
					value="recents"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction 
					label="Favorites"
					value="favorites"
					icon={<FavoriteIcon />}
				/>
				<BottomNavigationAction 
					label="Nearby"
					value="nearby"
					icon={<LocationOnIcon />}
				/>
				<BottomNavigationAction 
					label="Folder"
					value="folder"
					icon={<FolderIcon />}
				/>
			</BottomNavigation>
			<Typography align="center" color="textSecondary" component="p" variant="subtitle1">
				©ZamAV Positiv Blog React JS Material Ui site
			</Typography>
		</footer>
		</>
	);
}

export default App;














































































