import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    reviews:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        maxheight:'550px',
        margin:'0 auto',
        padding:'10px',
        background:'#D9D9D9',
        paddingBottom:'100px',
        boxSizing:'border-box',
    },
    container:{
        maxWidth:'70%',
        width:'100%',
    },
    h1:{
        fontSize: '48px',
        color: 'black',
        fontFamily: 'Markazi Text',
        padding: '0px'

    },
    h2:{
        fontSize: '30px',
        color: 'black',
        fontFamily: 'Markazi Text'
    },
    p:{
        color: 'black',
        fontFamily: 'Karla Text'
    },
    row: {
        display: 'flex',
        flex: '0 1 auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '.5rem',
        gap: '1em',
        justifyContent: 'stretch',

    },
    colLg: {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%',
    },
    colLg1: {
        flexBasis: '8.33333333%',
        maxWidth: '8.33333333%'
    },
    colLg2: {
        flexBasis: '16.66666667%',
        maxWidth: '16.66666667%'
    },
    colLg3: {
        flexBasis: '25%',
        maxWidth: '25%'
    },
    colLg4: {
        flexBasis: '33.33333333%',
        maxWidth: '33.33333333%'
    },
    colLg5: {
        flexBasis: '41.66666667%',
        maxWidth: '41.66666667%'
    },
    colLg6: {
        flexBasis: '50%',
        maxWidth: '50%'
    },
    colLg7: {
        flexBasis: '58.33333333%',
        maxWidth: '58.33333333%'
    },
    colLg8: {
        flexBasis: '66.66666667%',
        maxWidth: '66.66666667%'
    },
    colLg9: {
        flexBasis: '75%',
        maxWidth: '75%'
    },
    colLg10: {
        flexBasis: '83.33333333%',
        maxWidth: '83.33333333%'
    },
    colLg11: {
        flexBasis: '91.66666667%',
        maxWidth: '91.66666667%'
    },
    colLg12: {
        flexBasis: '100%',
        maxWidth: '100%'
    },
    card: {
        width: '100%',
        height: '100%',
        '&:hover': {
            transform: 'scale(1.05)',
    }}
}))