import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'

export const NewMembers = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>
            <Container style={{paddingTop: '100px', paddingBottom: '70px'}}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '25px', justifyContent: 'center',  flexDirection: 'column', display: 'flex'}}>
                        <Fade>
                        <h1>Join the most vibrant community-run Web3 organization</h1>
                        <p>BanklessDAO’s ever-growing community of creatives, developers, innovators, and leaders is open to all. Always.</p>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Slide up>
                        <img src={process.env.PUBLIC_URL + '/assets/media/members.png'} style={{maxWidth: '100%'}} alt="Members" />
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                        <Fade>
                        <h1 style={{textAlign: 'center'}}>How to join BanklessDAO</h1>
                        <div className='divider'></div>
                        <div style={{minHeight: '500px'}}></div>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <Slide up>
                        <h1>Dive in and build the future of work with us.</h1>
                        <a href="https://discord.com/invite/bankles" className='destyle' target="_blank" rel="noreferrer"><Button variant="contained" color="error">Join now</Button></a>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Fade>
                        <img src={process.env.PUBLIC_URL + '/assets/media/some3d.png'} alt="BANK Coin" style={{maxWidth: '100%'}} />
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}