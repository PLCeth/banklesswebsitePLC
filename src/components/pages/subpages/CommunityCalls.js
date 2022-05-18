import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'

export const CommunityCalls = (props) => {
    React.useEffect(() => {
        // scroll to stop
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    

    return (
        <Container style={{paddingBottom: '150px'}}>

            <Grid container style={{justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <Fade>
                    <h1 style={{textAlign: 'center'}}>Community Calls</h1>
                    <div className='divider' style={{maxWidth: '500px', marginTop: '0'}}></div>
                    <p className='centered textWreck'>JOIN THE ENTIRE BANKLESS COMMUNITY ON FRIDAYS AT 4PM UTC</p> 
                    </Fade>
                </Grid>
                <Grid item xs={12} md={12} className='textWreck centered'>
                    <Slide up>
                    <p>Community Calls are the anchor of the BanklessDAO community. Every Friday at 4pm UTC we gather 
                        for one hour on the Community Call Voice Stage to hear key governance updates, share hype news, 
                        and have roundtable discussions on important topics in the DAO. For those unable to join our Discord, 
                        catch the live stream on 
                    <a href="https://www.twitch.tv/banklessdao" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> BanklessDAO Twitch.</a></p>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/instructor.webp'} alt="instructor" style={{maxWidth: '100%'}} />
                    </Fade>
                </Grid>

                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Slide up>
                    <h1>WANT ALPHA?</h1>
                    <p style={{paddingTop: '20px'}}>Join the weekly CCs!</p>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Fade>
                    <div className='ccformatBG'>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <img src={process.env.PUBLIC_URL + '/assets/media/Dev-Guild-banner.webp'} alt="Dev guild" style={{maxWidth: '100%'}} />
                            </Grid>
                            <Grid item xs={12} md={8} style={{padding: '20px'}}>
                                <h1>The CC Format</h1>
                                <ul>
                                    <li>0-10 minutes: Moderator opens with key governance updates.</li>
                                    <li>10-30 minutes: Hype News from the community. What’s the most exciting thing happening in the DAO, and how can we celebrate it?</li>
                                    <li>30-55 minutes: Roundtable discussion on key topics in the DAO, especially governance.</li>
                                    <li>55-60 minutes: Moderator closes.</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Grid>


                            
                <Grid item xs={12} md={6} style={{textAlign: 'center', padding: '20px'}}>
                    <Fade>
                    <img src={process.env.PUBLIC_URL + '/assets/media/weeklyupdates.webp'} alt="Dev guild" style={{maxWidth: '100%'}} />
                    </Fade>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column'}}>
                    <Slide up>
                    <h1>Weekly Updates</h1>
                    <p>There’s so much going on in the DAO that we have two newsletters designed to share critical updates without crowding the discussions happening in the call. Get up to speed by reading:</p>
                    <ul>
                        <li>The Weekly Rollup Newsletter released Fridays.</li>
                        <li>The Gearing Up Newsletter released Tuesdays.</li>
                    </ul>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={8} className='textWreck' style={{display: 'flex', flexDirection: 'column'}}>
                    <Slide up>
                    <h1>Evolution</h1>
                    <p>The CC format was designed by the community via forum discussions and continues to evolve. 
                        <a href="https://twitter.com/samanthajmarin" target="_blank" rel="noreferrer" className='destyle' style={{color: '#fff'}}> Samanthaj</a> and 
                        <a href="https://twitter.com/frogmonkee" target="_blank" rel="noreferrer" className='destyle' style={{color: '#fff'}}> frogmonkee</a> led the effort in Season 3 and proposed several changes to revamp the CC format, which used to be a string of updates from coordinators. Read more about the evolution:</p>
                    <ul>
                        <li>CC Revamp Draft 1</li>
                        <li>CC Revamp Draft 2</li>
                        <li>Gearing Up Newsletter Proposal</li>
                    </ul>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={4} >
                    <Fade>
                    <div style={{textAlign:'center', padding: '20px'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bell-01.webp'} alt="bell" style={{maxWidth: '100%', textAlign: 'center'}} />
                    </div>
                    <p style={{textAlign:'center'}}>Add the Weekly CC to your calendar!</p>
                    <div style={{textAlign:'center'}}>
                    <Button variant="contained" color="error">Add to Calendar</Button>
                    </div>
                    </Fade>
                </Grid>

            </Grid>
        </Container>
    )
}