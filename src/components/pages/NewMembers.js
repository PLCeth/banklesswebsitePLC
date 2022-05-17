import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const NewMembers = (props) => {
    const [ currentSlide, setSlide ] = React.useState(1)
    const [ slideContent, setContent ] = React.useState([])

    const getContent = (slideNum) => {
        if (slideNum === 3) {
            return (
                <Fade>
                <div>
                    <h1 style={{textTransform: 'uppercase', fontSize: '1.4em'}}>Get Plugged into a project</h1>
                    <p>Find a guild or project that interests you and begin joining meetings. The best ways to get to know contributors include joining synchronous meetings, introducing yourself in channels, and making a positive impression on the community by delivering on work. Yes, it’s really that easy to start working in bDAO.</p>
                </div>
                </Fade>
            )
        } else if (slideNum === 2) {
            return (
                <Fade>
                <div>
                    <h1 style={{textTransform: 'uppercase', fontSize: '1.4em'}}>Read, follow, listen, and learn</h1>
                    <p>Subscribe, bookmark, and follow along to receive updates and news from the community:</p>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div className='nmLink'>The Weekly Rollup</div>
                        <div className='nmLink'>Gearing Up</div>
                        <div className='nmLink'>Decentralized Law</div>
                        <div className='nmLink'>Decentralized Art</div>
                        <div className='nmLink'>State of DAOs</div>
                        <div className='nmLink'>Crypto Sapiens</div>
                        <div className='nmLink'>Twitter</div>
                        <div className='nmLink'>Instagram</div>
                        <div className='nmLink'>Medium</div>
                        <div className='nmLink'>Mirror</div>
                    </div>
                </div>
                </Fade>
            )
        } 
        return (
            /* Slide 1 default */
            <Fade>
            <div>
                <h1 style={{textTransform: 'uppercase'}}>Join the server</h1>
                <p>Join the bDAO Discord server here.  Following a brief verification and onboarding process, you can get 
                    a free guest pass from a Level 2 contributor, which will allow you to explore the server.  Your guest pass 
                    expires in 15 days, but you can always reach out to an L2 to renew it while your earn your way to the 
                    35,000 BANK membership threshold.
                </p>
            </div>
            </Fade>
        )
    }

    React.useEffect(() => {
        // Set content
        setContent(getContent(currentSlide))
    }, [currentSlide])

    
    const downSlide = () => {
        if (currentSlide > 1) {
            let newSlide = currentSlide - 1
            setSlide(newSlide)
        }
    }

    const upSlide = () => {
        if (currentSlide < 3) {
            let newSlide = currentSlide + 1
            setSlide(newSlide)
        }
    }

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
                        <div style={{minHeight: '500px'}}>
                            <Grid container style={{justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '70px'}}>
                                <Grid item xs={12} md={3} style={{position: 'relative', backgroundColor: '#fff2', minHeight: '500px', borderRadius: '20px', borderLeft: '1px solid #fff7', borderRight: '1px solid #fff7'}}>
                                    <div className='newMemberSlide'>{ currentSlide }</div>
                                    <div className="newMemberLeft" onClick={() => downSlide()}><ArrowBackIcon /></div>
                                    <div className="newMemberRight" onClick={() =>upSlide()}><ArrowForwardIcon /></div>
                                    <div className="slideContent">{ slideContent }</div>
                                </Grid>
                            </Grid>

                        </div>
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