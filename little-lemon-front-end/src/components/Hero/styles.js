import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    hero: {
        display: 'flex',
        minHeight: '300px',
        background: '#495E57',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection: 'row',
        width: '100%',
        boxSizing:'border-box',

    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '50%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '50%',
        flex: 1
    },
    h1:{
        fontSize: '48px',
        color: '#F4CE14',
        fontFamily: 'Markazi Text',
        padding: '0px'

    },
    h2:{
        fontSize: '36px',
        color: 'white',
        fontFamily: 'Markazi Text'
    },
    p:{
        color: 'white',
        fontFamily: 'Karla'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto',
        maxWidth: '300px',
        maxHeight: '400px',
        borderRadius: '30px',
        position: 'relative',
        bottom: '-40px',
    },
    img: {
        objectFit: 'cover',
    },
    button: {
        fontFamily: 'Markazi Text',
        fontWeight: 'bold',
        background: '#F4CE14'
    }
}));
