import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import './card.css'

const Card = ({ min, max, name, img, onClose, id }) => {
    return (
        <div className="container test2">
            <div className="card">
                <div className="content">
                    <Link style={{ textDecoration: "none" }} to={`/ciudad/${id}`} >
                        <img className="image" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="300" height="300" alt="" />
                        <h3>{name}</h3>
                        <div className="contentMinMax">
                            <div className="tituleMinMax">
                                <h5>Min</h5>
                                <h5>Max</h5>
                            </div>
                            <div className="contenidoMinMax">
                                <p>{min}</p>
                                <p>{max}</p>
                            </div>
                        </div>
                    </Link>
                    <button className="btn" onClick={() => onClose(id)} >Close</button>
                </div>
            </div>
        </div>
    )
}

export default Card
