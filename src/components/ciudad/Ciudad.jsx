import React from "react";
import { Link, useParams } from "react-router-dom";
import './ciudad.css'

export default function Ciudad({ city }) {
    let { ciudadId } = useParams()
    const test = city.find(c => c.id === parseInt(ciudadId))
    return (
        <div className="prueba2">
            <div className="card2 ">
                <div className="contentCardTitle">
                    <h2 className="titleCard">{test.name}</h2>
                    <div className="ciudadContent">
                        <div className="ciudadLeft">
                            <p className="descriptionCard" >Temperatura: {test.temp} ºC</p>
                            <p className="descriptionCard" >Clima: {test.weather}</p>
                            <p className="descriptionCard" >Viento: {test.wind} km/h</p>
                        </div>
                        <div className="ciudadRight">
                            <p className="descriptionCard" >Cantidad de nubes: {test.clouds}</p>
                            <p className="descriptionCard" >Latitud: {test.latitud}º</p>
                            <p className="descriptionCard" >Longitud: {test.longitud}º</p>
                        </div>
                    </div>
                    <Link style={{ textDecoration: "none" }} to="/" >
                        <button className="btnCiudad">Return</button>
                    </Link>
                </div>
            </div>
        </div>

        // <div className="container test2">
        //     <div className="card">
        //         <h2 className="henry">{test.name}</h2>
        //         <div className="info">
        //             <div className="descriptionCiudad" >Temperatura: {test.temp} ºC</div>
        //             <div className="descriptionCiudad" >Clima: {test.weather}</div>
        //             <div className="descriptionCiudad" >Viento: {test.wind} km/h</div>
        //             <div className="descriptionCiudad" >Cantidad de nubes: {test.clouds}</div>
        //             <div className="descriptionCiudad" >Latitud: {test.latitud}º</div>
        //             <div className="descriptionCiudad" >Longitud: {test.longitud}º</div>
        //         </div>
        //     </div>
        // </div>
    )
}