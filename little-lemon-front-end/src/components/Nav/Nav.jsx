import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
// import { Menu } from '@mui/icons-material'
import logo from './logo.png'

import { useStyles } from './styles'


const Nav = () => {
  const classes = useStyles()
  const pages = [{name:'Home', link:'/'}, {name:'About', link:'#About'}, {name:'Menu', link:'#Menu'}
  ,{name:'Reservations', link:'#Reservations'}, {name:'Order Online', link:'#Order'},{name:'Login', link:'#Login'}]

  console.log(pages)
  return (
    <>
    <AppBar position="fixed" style={{ background: '#edefee' }} elevation={0} width={'100%'}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} src={logo} alt="Little Lemon Logo"/>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{ color: 'black',fontFamily: 'Markazi Text',display:'flex'}}
              >
                <p>{page.name}</p>
              </Button>
            ))}

      </Toolbar>

    </AppBar>
    </>
  )
}

export default Nav
