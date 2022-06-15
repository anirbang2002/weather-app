
import { Box,makeStyles } from "@material-ui/core";
import Weather from './Weather';

const useStyles = makeStyles({
    compo: {
        height: '100%',
        width: '100%',
        background: 'black'
    }
})

const Back = () => {
    const classes = useStyles();
    return (
    <Box className={classes.compo}>
        <Weather/>
    </Box>
  );
}


export default Back;