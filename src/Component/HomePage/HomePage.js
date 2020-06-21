import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <h1>NEW AND UPCOMING RELEASES</h1>
                </div>
            </div>
        )
    }
}