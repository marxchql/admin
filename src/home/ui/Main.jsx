import React from 'react'
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

export default function Main(props) {
    return (
        <div className='main-wrap'>
            <Header></Header>
            <Content children={props.children}></Content>
            <Footer></Footer>
            
        </div>
    )
}
