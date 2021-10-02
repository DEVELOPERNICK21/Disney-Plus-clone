import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewer from './Viewer'
// import db from '../firebase'

function Home() {
// useEffect(() => {
//     db.collection("movies").onSnapshot((snapshot) => {
//         let tempMovies = snapshot.docs.map((doc) => {
//             return {id : doc.id, ...doc.data()}
//         })
//         console.log(tempMovies);
//     })
// }, [])

    return (
        <Container>
            <ImageSlider />
            <Viewer />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
height: calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position: relative;
overflow-x: hidden;

&:before{
    background: url('./assets/images/home-background.png') center center / cover fixed no-repeat ;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: -1;
}
`