import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App-wrapper">
            <header className={'Header'}>
                <img src="https://w-dog.ru/wallpapers/5/9/288879431917547/polyarnaya-sova-belaya-sova-ptica.jpg"
                     alt="image"/>
            </header>
            <nav className={'Nav'}>
                <div><a href="">Profile</a></div>
                <div><a href="">Message</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className={'Content'}>
                <div><img src="https://img3.goodfon.ru/original/1920x1200/4/dd/abstract-colors-unreal-clouds-1927.jpg"
                          alt="fon"/></div>
                <div className={'Ava'}><img src="https://photopict.ru/wp-content/uploads/2019/05/prikol-nye-kartinki-na-avu1.jpg"
                          alt="Ava"/>
                    Ava +Description
                </div>
                <div>Myposts
                    <div>New Post</div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                    <div>post4</div>
                </div>


            </div>
        </div>
    );
}

export default App;
