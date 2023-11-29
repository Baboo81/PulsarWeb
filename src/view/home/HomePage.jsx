
import { Fragment } from 'react';
import style from './homePage.module.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';

const title = "ammme"; 
const skills = [
    'La qualité du suivi',
    'Approche digitalisée',
    'Contact client personnalisé'
]

function Title (color) {
    return <h1 style={ {color: color} }>amme</h1>
}

const HomePage = () => {

    return (
            <section>
                <Title color="white"/>
                <p class="p-4 mx-5">
                    {skills.map(skill => (<li key={skill}> {skill} </li>))}
                </p>
            </section>
          
            )
}


export default HomePage