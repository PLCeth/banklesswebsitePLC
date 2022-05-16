import { Button, Container, Grid } from '@mui/material'
import * as React from 'react'


export const Listen = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>
            <Container style={{paddingTop: '100px'}}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <h1 >The Podcast Hatchery</h1>
                        <p style={{ lineHeight: '1.5em', fontSize: '1.3em'}}>Incubates audio storytelling projects. The team helps new podcasters find their audience, 
                            build their unique storytelling identity, and explore Web3 through interviews with thought-leaders in the space.</p>
                        <a href="https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b" target="_blank" rel="noreferrer" className='destyle'><Button color="error" variant="contained">Podcast Hatchery</Button></a>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={process.env.PUBLIC_URL + '/assets/media/podcast-hatchery.png'} alt="podcast-hatchery" style={{maxWidth: '100%'}} />
                    </Grid>

                    <Grid item xs={12} md={4} style={{lineHeight: '1.5em', color: '#aaa', padding:'20px'}}>
                        <p>Check out these shows produced and hosted by members of BanklessDAO:</p>
                    </Grid>

                    <Grid item xs={12} md={6}>
                    </Grid>

                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={12}>
                        <h1 style={{textAlign: 'center', paddingTop: '50px'}}>Coming Soon</h1>
                        <div className='divider'></div>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '25px', marginBottom: '20px'}}>
                        <div className="graybox">
                        <h1 style={{padding: '10px', textAlign: 'center'}}>AB INITIO: FROM THE BEGINNING</h1>
                        <div>Hosted By </div>
                        <p style={{lineHeight: '1.5em'}}>A Legal Guild podcast series with each episode focusing on addressing current DAO and crypto-related legal issues via an interview with a subject matter expert.</p>
                        </div>
                    </Grid> 
                    <Grid item xs={12} md={6} style={{padding: '25px'}}>
                        <div className='graybox'>
                        <h1 style={{padding: '10px', textAlign: 'center'}}>BOUNTY HUNTER</h1>
                        <div>Hosted By </div>
                        <p style={{lineHeight: '1.5em'}}>Bounty Hunter is a show about how to find engaging and rewarding work in the new Web3 economy. Join serial entrepreneur Brandon Nolte as he interviews community builders, DAO contributors, and the best innovators in Web3. Follow Bounty Hunter on  Twitter.</p>
                        </div>
                    </Grid> 

      
                </Grid>
            </Container>

            <div className='elipBG'>
                <Container>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '20px'}} >
                        <h1 style={{fontSize: '4em'}}>Have your own podcast idea?</h1>
                        <p style={{lineHeight: '1.5em', fontSize: '1.7em'}}>Join <a href="https://discord.com/invite/bankless" target="_blank" rel="noreferrer" className='destyle' style={{color: '#F00'}}>BanklessDAO</a> and get in contact with the Podcast Hatchery.</p>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>
    )
}