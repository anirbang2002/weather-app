
import {Box,makeStyles} from '@material-ui/core';
import logo from '../images/sunset.jpg';
import Form from './Form';

const useStyles = makeStyles({
    main: {
        height: '100vh',
        display: 'flex',
        width: '65%',
        margin: '0 auto',
        alignItems: 'center'
    },
    left:{
            backgroundImage:`url(${logo})`,
            height: '80%',
            width: '30%',
            backgroundSize: 'cover',
            borderRadius: '20px 0 0 20px',

    },
    right:{
            background: 'linear-gradient(to right, #e74c3c, #e67e22)',
            height: '80%',
            width: '70%',
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.main}>
            <Box className={classes.left}></Box>
            <Box className={classes.right}>
                <Form/>
            </Box>
        </Box>
    )
}

export default Weather;