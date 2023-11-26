
import { link } from "react-router-dom";
import style from './footer.module.css';
import { Marker, MapContainer, TileLayer, useMap } from 'react-leaflet'

const position = [50.709925, 4.352603];
const Footer = () => (

    <footer className="w-100 text-center">
        <div className="container">
            <div className="row p-4">
                <div className="col-md-6">
                    <h2>Adresse</h2>
                    <p>14 rue champ rodange, 1410 Waterloo</p>
                    <MapContainer className= {style.map} center={position} zoom={16.4} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>,
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    </footer>
);





export default Footer;