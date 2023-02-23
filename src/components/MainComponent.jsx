import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Dashboard from './DashboardComponent';
import About from './AboutComponent';
import Library from './LibraryComponent';
import Words from './WordsComponent';
import Account from './AccountComponent';
import Analyze from './AnalyzeComponent';
import { Routes, Route } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/words" element={<Words />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/analyze" element={<Analyze />} />
                </Routes>
                <Footer />
            </div>
        );
    }
} 

export default Main;