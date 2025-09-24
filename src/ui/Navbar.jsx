import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);
    //console.log(user);

    const onLogout = () => {
        logout();
        navigate('/login');
    }
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >   
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primay'>
                        {user?.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}