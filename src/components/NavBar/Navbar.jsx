import   { Link, link } from "react-router-dom";
import style from './navBar.module.css';
import BtnStyle from "../Btn/BtnStyle";



const Navbar = () => ( 

    <nav class="navbar navbar-expand-lg p-4">
         <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <BtnStyle class="nav-item  mx-4">
                           <Link to='/home' class="nav-link" aria-current="page" href="#">Home</Link>
                        </BtnStyle>
                        <BtnStyle class="nav-item mx-4">
                            <Link to='/other' class="nav-link" href="#">Other</Link>
                        </BtnStyle>
                        <BtnStyle class="nav-item mx-4">
                            <Link to='/contact' class="nav-link" href="#">Contact</Link>
                        </BtnStyle>
                    </ul>
                </div>
            </div>
        </nav>

    );


export default Navbar