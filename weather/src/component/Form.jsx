import { Box, TextField,Button,makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getData } from './service/api.js'
import Information from "./Information";

const useStyles = makeStyles({
    compo: {
        padding: 10,
        background: '#fff',
        //height: '100%',
        //border: 4,
        //borderColor: "primary.main"
    },
    intp: {
        color: 'darkred',
        marginRight: 15,
    },
    but:{
        width: 150,
        height: 40,
        background: '#e67e22',
        color: '#fff'
    }
})



const Form = () => {
    const classes =  useStyles();
    const [data,setData] = useState();
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [click,handleClick] = useState(false);
    useEffect(() => {
        const getWeather = async () => {
         city && await getData(city,country).then(response => {
            setData(response.data);
            console.log(response.data);
        })
    }
    getWeather();
    handleClick(false);
    },[click]);

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return(
        <>
            <Box className={classes.compo}>
                <TextField
                    inputProps={{className: classes.intp}}
                    onChange={(e) => handleCityChange(e.target.value)}
                    label='City' 
                    className={classes.intp}
                />
                <TextField
                    inputProps={{className: classes.intp}}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    label="Country"
                    className={classes.intp}
                />
                <Button variant="contained" className={classes.but}
                onClick = {() => handleClick(true)}
                >Get Weather</Button>
            </Box>
            <Information data={data}/>
        </>
    )
}

export default Form;