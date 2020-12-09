// @ts-nocheck
import React from 'react';
import '../../scss/app';
import { createPopper } from '@popperjs/core/lib/popper-lite.js';

function NavBar() {
    return (
        <div>

            <div className="btn-group">
            <button type="button" className="btn btn-danger">Action</button>
            <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
            </div>
            </div>
             {/* <nav>
             <button className="btn btn-outline-light mx-2 dropdown-toggle" data-bs-toggle="dropdown" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Menu
             </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">About</a>
            <a className="dropdown-item" href="#">Service</a>
            <a className="dropdown-item" href="#">Contact</a>
            </div>
             </nav> */}
        </div>
    );
}
export default NavBar;