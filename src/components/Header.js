import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/assets/images/logo.svg" alt="Logo Of disney+"/>
            <NavMenu>
                <a href="/" >
                    <img alt="HeaderImage" src="/assets/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a href="/"  >
                    <img alt="HeaderImage" src="/assets/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a href="/"  >
                    <img alt="HeaderImage" src="/assets/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/"  >
                    <img alt="HeaderImage" src="/assets/images/original-icon.svg" />
                    <span>ORIGNIALS</span>
                </a>s
                <a href="/"  >
                    <img alt="HeaderImage" src="/assets/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a href="/"  >
                    <img alt="HeaderImage" src="/assets/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
                <a href="/login" >
                    <img alt="HeaderImage" src="/assets/images/Login.png" />
                    <span>Login</span>
                </a>
            </NavMenu>
            <UserImg src="/assets/images/user.jpg" />
        </Nav>
    )
}

export default Header

const Nav =styled.header`
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
overflow-x: hidden;
`

const Logo = styled.img`
width: 80px;
margin: 0 36px;
`

const NavMenu = styled.div`
display: flex;
flex: 1;
align-content: center;
a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    img {
        height: 20px;
    }
    span {
        font-size: 12px;
        letter-spacing: 1.5px;
        position: relative;
        :after{
            height: 2px;
            content: "";
            background-color: #fff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.45, 0.75, 0.99 ) ;
        }
    }
    &:hover {
        span:after{
        transform: scaleX(1);
        opacity: 1;
    }
    }
}
`

const UserImg = styled.img`
height: 45px;
width: 45px;
border-radius: 50%;
cursor: pointer;
margin: 0 36px;

`