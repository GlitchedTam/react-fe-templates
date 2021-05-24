import { Link } from 'react-router-dom';

import './styles/navbar.css';

const Navbar = () => {

    return (
        <nav id='navbar'>
            <h1>My react router navbar</h1>
            <div id='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/counter'>Counter</Link>
            </div>
        </nav>
    );
}

export default Navbar;