import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    special: {
        display: 'flex',
        minHeight: '300px',
        background: 'white',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection: 'row',
        width: '100%',
        marginTop: '4em',
    },
    row: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: '50%',
        background: 'white',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
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
    h3:{
        fontFamily: 'Markazi Text'
    },
    h4:{
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
        height: '100%',
        maxHeight: '550px',
        borderRadius: '10px',
        background: '#EDEFEE',
        '&:hover': {
            transform:'scale(1.05)'
        }
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        maxHeight: '200px',
    },
    button: {
        fontFamily: 'Markazi Text',
        fontWeight: 'bold',
        background: '#F4CE14'
    },
    cardContent: {
        margin: '15px',
        background:'#EDEFEE'
    },
    orders: {
        position:'relative',
        bottom: '10px',
        left: '15px',
        marginBottom: '20px',
        fontFamily: 'Karla Text',
        fontWeight: 'bold',
        color:'black',
        fontSize: '20px'

    }
}));