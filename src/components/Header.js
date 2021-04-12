import React, {useState} from 'react'
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import {actionTypes} from './Reducer';
import {auth, provider} from '../firebase';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '3d0px',
      outline: 'none',
    },
}));

const Header = () => {
    const [activeOne, setActiveOne] = useState(true);
    const [activeTwo, setActiveTwo] = useState(false);
    const [activeThree, setActiveThree] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [openPost, setOpenPost] = useState(false);

    const [state, dispatch] = useStateValue()

    const oneClicked = () => {
        setActiveOne(true);
        setActiveTwo(false);
        setActiveThree(false);
    }

    const twoClicked = () => {
        setActiveOne(false);
        setActiveTwo(true);
        setActiveThree(false);
    }

    const threeClicked = () => {
        setActiveOne(false);
        setActiveTwo(false);
        setActiveThree(true);
    }

    const navBackground = () => {
        window.scrollY >= 60 ? setNavbar(true) : setNavbar(false);
    }

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
        setOpenPost(false);
    }

    window.addEventListener('scroll', navBackground)

    const hostClicked = () => {
        window.history.pushState({}, '', '/host');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div className="header">
            <div className="header__modal">
                <Modal open={openPost} onClose={() => setOpenPost(false)} >
                    <div style={modalStyle} className={classes.paper}>
                        <div className="header__modalItems" >
                            <img className="header__modalImage" src="http://1000marcas.net/wp-content/uploads/2020/01/Airbnb-logo.jpg" />
                            {state.user.displayName
                            ? <h1>Hello {state.user.displayName},<br /> You are logged in!</h1>
                            : <button onClick={signIn}>Login with Gmail</button>
                            }
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="header__main">
                <div className={`header__nav ${navbar ? 'active' : null}`}>
                    <div className="header__logo">
                        <img className="header__logoImage" src={`${!navbar ? 'https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg' : 'http://1000marcas.net/wp-content/uploads/2020/01/Airbnb-logo.jpg'}`}/>
                    </div>
                    {!navbar 
                    ? <div className="header__menu">
                        <p onClick={oneClicked} className={`header__menuItem ${activeOne ? "header__menuActive" : null}`}>Places to stay</p>
                        <p onClick={twoClicked} className={`header__menuItem ${activeTwo ? "header__menuActive" : null}`}>Experiences</p>
                        <p onClick={threeClicked} className={`header__menuItem ${activeThree ? "header__menuActive" : null}`}>Online Experiences</p>
                    </div>
                    : <div className="header__search">
                        <button className="header__button">
                            <p>Start your search</p>
                            <SearchIcon />
                        </button>
                      </div>
                    }

                    <div className="header__user">
                        <div onClick={() => hostClicked()} className={`header__userHost ${navbar ? 'active' : null} `}>
                            <p className="header__userItem" >Become a host</p>
                        </div>
                        <LanguageIcon className={`header__language ${navbar ? 'active' : null} header__userItem`} />
                        <div onClick={() => setOpenPost(true)} className={`header__userLogin ${navbar ? 'active' : null} header__userItem`}>
                            <ReorderSharpIcon style={{fill: 'black', width: '30px', height: '30px'}} />
                            <Avatar src={
                                state.user ? state.user.photoURL : null
                            } style={{fill: 'gray', width: '30px', height: '30px'}} />
                        </div>
                    </div>
                </div>
                <div className="header__image">
                    <img src="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560" />
                </div>
                <div className="header__caption">
                    <p style={{fontFamily: "CircularAirPro Book", fontSize: '30px'}}>Made possible by Hosts</p>
                </div>
            </div>
        </div>
    )
}

export default Header
