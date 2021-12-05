import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import About from './components/about/About';
import Cards from './components/cards/Cards';
import Ciudad from './components/ciudad/Ciudad';
import Nav from './components/navbar/Nav';
import swal from 'sweetalert';
const localStorageKey = 'citieSave';
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
    const [cities, setCities] = useState([]);

    const citiesSaveLocalStorage = () => {
        const citiesStorage = JSON.parse(window.localStorage.getItem(localStorageKey))
        setCities(citiesStorage)
    }

    useEffect(() => {
        citiesSaveLocalStorage()
    }, [])

    useEffect(() => {
        window.localStorage.setItem('citieSave', JSON.stringify(cities))
    }, [cities])

    function onSearch(ciudad) {
        //Llamado a la API del clima
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
                console.log(recurso)
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                    };
                    let filterCities = cities.find(c => c.id === recurso.id)
                    if (filterCities) {
                        swal({
                            title: 'City already created',
                            text: 'Please enter another city',
                            icon: 'warning',
                            button: "Close"
                        })
                    } else {
                        setCities(oldCities => [...oldCities, ciudad]);
                        swal({
                            title: "Successful!",
                            text: "City added successfully.",
                            icon: "success",
                            button: "Ok"
                        })
                    }
                } else {
                    swal({
                        title: 'City not found',
                        text: 'Please enter another city',
                        icon: 'warning',
                        button: "Close"
                    });
                }
            });
    }

    function onClose(id) {
        setCities(oldCities => oldCities.filter(cityId => cityId.id !== id))
    }

    return (
        <>
            <Nav onSearch={onSearch} />
            <Routes>
                <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
                <Route path="/about" element={<About />} />
                <Route path="/ciudad/:ciudadId" element={<Ciudad city={cities} />} />
            </Routes>
        </>
    );
}

export default App;
