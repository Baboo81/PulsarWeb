import   { Link, link } from "react-router-dom";
import style from './navBar.module.css';

const Navbar = () => ( 

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
            <a class="navbar-brand" href="#">amme</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <Link to='/home' class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/other' class="nav-link" href="#">Other</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );


export default Navbar;