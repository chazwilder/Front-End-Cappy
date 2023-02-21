import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    booking:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        maxheight:'550px',
        margin:'0 auto',
        padding:'50px',
        boxSizing:'border-box',
        background: '#FFF',
    },
    container:{
        width:'70%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
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
        fontFamily: 'Karla Text',
        fontSize:'20px'
    },
    row: {
        display: 'flex',
        flex: '0 1 auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '.5rem',
        gap: '1em',
        justifyContent: 'center',
        width: '100%',
        minWidth:'350px'

    },
    contRow:{
        display: 'flex',
        flex: '0 1 auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '.5rem',
        gap: '1em',
        justifyContent: 'center',
        width: '100%',
    },
    colLg: {
        flexGrow: 1,
        flexBasis: 0,
        width: '100%',
        minWidth:'350px',
        marginLeft:'auto',
        marginRight:'auto'
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
    }},
    img:{
        width:'100%',
        boxShadow: '0px 0px 10px rgba(10,10,0,.5)',
        alignSelf:'center',
        justifySelf:'center'

    },
    img1:{
        maxHeight: '338px',
        maxWidth: '272px',
        boxShadow: '0px 0px 10px rgba(10,10,0,.5)',
        position: 'absolute',
        bottom: '0px',
    },
    img2:{
        maxHeight: '338px',
        maxWidth: '272px',
        boxShadow: '0px 0px 10px rgba(10,10,0,.5)',
        position: 'absolute',
        bottom: '0px',
        left: '35%',
        transform: 'translate(-50%, -50%)',
    },
    textBox:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    footerLinks: {
        marginBottom:'10px',
    }

}))