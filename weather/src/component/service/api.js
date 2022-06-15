import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = '1051e5a0e3c42aa659396f1f6deed673'

export const getData =  (city,country) => {
    return  axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}