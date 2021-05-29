import React from 'react';
import { Router } from '@reach/router';
import Balances from './balances/balances';


const Pages = () => {
    return(
        <Router>
            <Balances path="/" />
        </Router>
    )
}
export default Pages;
