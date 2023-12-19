import React from 'react';
import logo from '../images/luxa.org-color-logo192.png'
import img_1 from "../images/icons8-instagram-50.png"
import img_2 from "../images/icons8-твиттер-50.png"
import img_3 from "../images/icons8-телеграм-50.png"
import "../styles/about.css"
const About = () => {
    return (
        <>
            <div className={"main-about"}>
                <h1>Welcome!</h1>
                <img className={"logo"} src={logo} alt=""/>
                <p>This is a small project on Web-technologies developed on React technologies demonstrating the student's knowledge.
                    The project is a book library, where you can find books in theory and add them to your so-called shelf
                </p>
                <a href="https://icons8.ru/icons/set/telegram"><img className={"a-1"} src={img_1} alt=""/></a>
                <a href="https://icons8.ru/icons/set/telegram"><img className={"a-2"} src={img_2} alt=""/></a>
                <a href="https://icons8.ru/icons/set/telegram"><img className={"a-3"} src={img_3} alt=""/></a>
            </div>
        </>
    );
};

export default About;