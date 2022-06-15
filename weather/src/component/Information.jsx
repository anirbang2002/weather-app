import { Box, Typography,makeStyles } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';


const useStyles = makeStyles({
    compo: {
        margin: 50
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,
    },
    text1: {
        color: '#fff'
    },icon: {
        marginRight: 15,
        color:'yellow'
    }
})

const Information = ({ data }) => {
    const classes = useStyles();
    return (
        data ?
        <Box className={classes.compo}>
            <Typography className={classes.row}><LocationOnIcon className={classes.icon}/><Box className={classes.text1} component="span">Location: {data.name}, {data.sys.country}</Box></Typography>
            <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon}/><Box className={classes.text1} component="span">Temperature: {data.main.temp}°C</Box></Typography>
            <Typography className={classes.row}><OpacityIcon className={classes.icon}/><Box className={classes.text1} component="span">Humidity: {data.main.humidity}</Box></Typography>
            <Typography className={classes.row}><Brightness5Icon className={classes.icon}/><Box className={classes.text1} component="span">Sun Rise: {new Date(data.sys.sunrise*1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row}><Brightness6Icon className={classes.icon}/><Box className={classes.text1} component="span">Sun Set: {new Date(data.sys.sunset*1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row}><DehazeIcon className={classes.icon}/><Box className={classes.text1} component="span">Condition: {data.weather[0].main}</Box></Typography>
            <Typography className={classes.row}><CloudIcon className={classes.icon}/><Box className={classes.text1} component="span">Clouds: {data.clouds.all}%</Box></Typography>
        </Box>: ''
    )
}

export default Information;