import {useState, useEffect, React} from 'react'
import firebase from '../firebase';
import 'firebase/auth';
import '../App.css';
// import SignIn from "./SignIn.js";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function NavBar() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const classes = useStyles();

  // Initialize user state
  const [user, setUser] = useState('Guest');

  // menu state
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle authentication states
  auth.onAuthStateChanged(user => {
    if (user) {
      setUser(user);
    }
    else {
      setUser('Guest');
    }
  });

  // Authenticate users
  function googleAuth(action) {
    if (action === 'sign-in') {
      auth.signInWithPopup(provider);
      console.log(user.photoURL)
    }
    else if (action === 'sign-out') {
      auth.signOut();
      handleClose();
    }
  }


  return (
    <div>
      <CssBaseline />
        <AppBar color="secondary">
          <Container maxWidth={false}>
            <ToolBar variant="regular">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>Taskify</Typography>
              {user === 'Guest' ? <Button startIcon={<AccountCircleIcon />} color="inherit" onClick={() => googleAuth("sign-in")}>Login</Button> : <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Avatar src={user.photoURL} alt={user.displayName} />
              </Button>}
            </ToolBar>
          </Container>
        </AppBar>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>New Task</MenuItem>
          <MenuItem onClick={() => googleAuth('sign-out')}>Logout</MenuItem>
        </Menu>
    </div >
  );
}

export default NavBar;
