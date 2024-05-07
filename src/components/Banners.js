import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: "url(./banner2.jpg)"
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagLine:{
        display:"flex",
        flexDirection:"column",
        height:"40%",
        justifyContent:"center",
        textAlign:"center"
    }
}))

function Banners() {
    const classes = useStyles()

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagLine}>
                <Typography
                    variant='h2'
                    style={{
                        fontWeight:"bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat"
                    }}
                >Crypto Hunter</Typography>

                <Typography
                    variant='subtitle2'
                    style={{
                        color:"darkgrey",
                        textTransform:"capitalize",
                        fontFamily: "Montserrat"
                    }}
                >Get All THe Info Regarding Your Favorite Crypto Currency</Typography>
            </div>
        </Container>
    </div>
  )
}

export default Banners