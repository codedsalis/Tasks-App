import { useState, useEffect, React } from 'react';
import firebase from './firebase';
import 'firebase/auth';
import './App.css';
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
import NavBar from './components/NavBar';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();
  // const classes = useStyles();

  // // Initialize user state
  // const [user, setUser] = useState('Guest');

  // // Handle authentication states
  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     setUser(user);
  //   }
  //   else {
  //     setUser('Guest');
  //   }
  // });

  // function googleAuth(action) {
  //   if (action === 'sign-in') {
  //     auth.signInWithPopup(provider);
  //     console.log(user.photoURL)
  //   }
  //   else if (action === 'sign-out') {
  //     auth.signOut();
  //   }
  // }


  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <NavBar />
      </Container>
    </div >
  );
}

export default App;
