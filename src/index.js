import React from 'react';
import ReactDOM from 'react-dom'
import SPAContainer from './SPA/spacontainer';
import {HashRouter} from 'react-router-dom'
import Menu from './SPA/menu/menu';

ReactDOM.render(
            <HashRouter>
                <SPAContainer></SPAContainer>
            </HashRouter>
            ,document.getElementById('spa'))