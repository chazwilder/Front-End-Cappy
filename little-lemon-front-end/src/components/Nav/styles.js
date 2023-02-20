import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        height: '80px',
        maxHeight: '80px',
        justifyContent: 'space-between',
        margin: 'auto',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
    },
    logo: {
        width: 'auto',
        height: '50px'
    }
}));
