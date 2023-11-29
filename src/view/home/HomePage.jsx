
import { Fragment } from 'react';
import style from './homePage.module.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import Btn from '../../components/Btn/Btn';

const title = "amme"; 
const title2 = "Fiduciaire";
const skills = [
    'La qualité du suivi',
    'Approche digitalisée',
    'Contact client personnalisé'
]

function Title ({color, fontSize}) {
    return <h1 style = { 
        {color: color, fontSize: fontSize}}> {title} 
           </h1>

}

function Title2 ({color, fontSize}) {
    return <h1 style = { 
        {
            color: color, 
            fontSize: fontSize
            
        }}> 
        
        {title2} 
           </h1>

}


const HomePage = () => {

    return (
            <section>
                 <p class="p-4 mx-5">
                    {skills.map(skill => (<li key={skill}> {skill} </li>))}
                </p>
                <Title color="#fb5724" fontSize="16em"/>
                <Title2 color="#fb5724" fontSize="10em"/>
                <Btn />
            </section>
          
            )
}


export default HomePage