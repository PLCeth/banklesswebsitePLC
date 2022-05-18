import { Grid, Button, Container } from '@mui/material'
import * as React from 'react'
import { Journey } from '../../StartJourney';
import { Fade, Slide } from 'react-reveal';

export const Media = (props) => {
    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    

    return (
        <Container>
            <Grid container style={{justifyContent: 'center', padding: '20px'}}>
                <Grid item xs={12} md={12}>
                    <Fade>
                    <h1 style={{textAlign: 'center'}}>Media Kit</h1>
                    <div className='divider' style={{maxWidth: '300px', marginTop: '0'}}></div>
                    <p className='textWreck centered' style={{textTransform: 'uppercase'}}>For Journalists, podcasters, and the media:</p>
                    </Fade>
                </Grid>
            
                <Grid item xs={12} md={6} className='textWreck' style={{color: '#FFF'}}>
                    <Slide up>
                    <p>If you're interested in covering BanklessDAO, the best way to get in touch with core members is to join the BanklessDAO 
                        Discord server and send a message in the #general channel.  A community member will point you in the right direction!
                    </p>
                    <p>Another way to gather information or find interviewees for your piece is to reach out to the Writers Guild by putting 
                        a message in #writer-general.  They will field media inquiries and help you find your way through the DAO.
                    </p>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={6}  >

                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '60px'}}>
                    <div style={{textAlign: 'center'}}><Button color="error" variant="contained">Join The Server</Button></div>
                </Grid>

                <Grid item xs={12} md={12} style={{padding: '20px', marginTop: '50px', paddingTop: '20px', backgroundColor: '#fff2', borderRadius: '20px'}}>
                    <Fade>
                    <div style={{textAlign: 'center'}}>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <img src={process.env.PUBLIC_URL + '/assets/media/Dev-Guild-banner.webp'} alt="dev guild" style={{maxWidth: '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={8} style={{textAlign: 'left', padding: '20px'}}>
                                <h1>For Collaborators and Partners:</h1>
                                <p className='textWreck'>If we're working together on a sponsored collaboration and your need branding details, here's our brand kit.</p>
                                <Button color="error" variant="contained">Brand Kit</Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={12} style={{paddingTop: '100px'}}>
                    <Fade>
                    <Journey />
                    </Fade>
                </Grid>
            </Grid>
        </Container>
    )
}