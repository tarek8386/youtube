import React, { Component } from 'react'
import Header from './header-component';
import 'bootstrap/dist/css/bootstrap.min.css'
import Player from './video-player';
import Suggestion from './suggestion-component';
function Youtube() {
    return ( 
        <div className="App">
        <Header/>  
        <div className="container mt-4">
            <div className="row">
                <Player/>
                <Suggestion/>
            </div>
        </div>
        <footer className="bg-dark text-white py-2 text-center">
            <p>&copy; 2023 YouTube Player</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        
        </div>
     );
}

export default Youtube;