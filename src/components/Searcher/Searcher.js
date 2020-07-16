import React from 'react';
import { TextField } from '@material-ui/core';
import './Searcher.css';


function Searcher() {
    return (
    <div className="searcher-container">
        <div className="searcher">
            <TextField variant="outlined" style={{width: '100%'}}/>
        </div>
    </div>
    );
}

export default Searcher;