import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation logoTitle="HTML & CSS Project"/>
                <Header title="ITonline Student Extraordinaire" button="Get in Touch" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
