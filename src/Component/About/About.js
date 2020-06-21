import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import img from '../../Images/IMG_0447.JPG';
import './About.css';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="about-page-container">
                    <h1 className="about-header">About</h1>
                    <div className="profile-description-container">
                        <div className="head-shot-container">
                            <img className="head-shot" src={img} alt="brian hawkins head shot"/>
                        </div>
                        <div className="description-container">
                            <blockquote className="description-bio">
                                <p>Aside from being an English teacher for over sixteen years, Brian Hawkins is a comic book writer, author, and script writer. 
                                Additionally, he is an editor for Mad Cave Studios, an independent comic book publishing company based in Florida, as well as a writer for Black Box Comics; 
                                he is also an author for North Star Editions Publishing. When Brian is not freelance writing or editing, he’s working on his web comic, 
                                Separate But Equal and other creator-ownd and self-publishing properties, both comics and novels. </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}