import { Container, Grid } from '@mui/material'
import * as React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const HomePage = (props) => {


    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <h1 className='mainHeader'>Media and Social DAO Onboarding 1 billion people to crypto</h1>
                        <div className='divider'></div>
                        <p className='centered'>
                            We're Headed West. <a href={'#k'} className='linkStyle'>Join Us</a>
                        </p>
                    </Grid>
                </Grid>
            </Container>

            <video  autoPlay loop muted id="background-video">
                <source src={process.env.PUBLIC_URL + '/assets/media/DAOhandLogo.mp4'} type="video/mp4" />
            </video>

            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>We Take a Decentralized approach To:</h2>
                        <div className='divider'></div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="gridBox">
                            <img src={process.env.PUBLIC_URL + '/assets/media/media.jpg'} alt="Media" className='gridImage'/>
                            <div className="paddedBox">
                                <h2 className='subHeader'>Media</h2>
                                <p style={{padding: '20px', fontSize: '1.2em', color: '#bbb'}}>
                                    Producing cutting-edge written, visual, and audio content
                                </p>
                                <div className="smallDivider"></div>
                                <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
                                <span style={{padding: '10px', paddingTop: '25px', borderBottom: '1px solid #222'}}>
                                    <a href={'#k'} style={{color: '#FFF', textDecoration: 'none'}}>Start <ArrowForwardIosIcon className='arrowIcon'/></a>
                                </span>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="gridBox">
                            <img src={process.env.PUBLIC_URL + '/assets/media/consulting.jpg'} alt="Consulting" className='gridImage'/>
                            <div className="paddedBox">
                                <h2 className='subHeader'>Consulting</h2>
                                <p style={{padding: '20px', fontSize: '1.2em', color: '#bbb'}}>
                                    Providing consulting services for other DAOs and Web3-native companies.
                                </p>
                                <div className="smallDivider"></div>

                                <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
                                <span style={{padding: '10px', paddingTop: '25px', borderBottom: '1px solid #222'}}>
                                    <a href={'#k'} style={{color: '#FFF', textDecoration: 'none'}}>Start <ArrowForwardIosIcon className='arrowIcon'/></a>
                                </span>
                                </div> 
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="gridBox">
                            <img src={process.env.PUBLIC_URL + '/assets/media/dao-tooling.jpg'} alt="DAO Tooling" className='gridImage'/>
                            <div className="paddedBox">
                                <h2 className='subHeader'>DAO Tooling</h2>
                                <p style={{padding: '20px', fontSize: '1.2em', color: '#bbb'}}>
                                    Shipping products and services that are changing the future of work.
                                </p>
                                <div className="smallDivider"></div>

                                <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
                                <span style={{padding: '10px', paddingTop: '25px', borderBottom: '1px solid #222'}}>
                                    <a href={'#k'} style={{color: '#FFF', textDecoration: 'none'}}>Start <ArrowForwardIosIcon className='arrowIcon'/></a>
                                </span>
                                </div> 
                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <div className="gridBox">
                            <img src={process.env.PUBLIC_URL + '/assets/media/coming-home.jpg'} alt="Coming Home" className='gridImage'/>
                            <div className="paddedBox">
                                <h2 className='subHeader'>Coming Home</h2>
                                <p style={{padding: '20px', fontSize: '1.2em', color: '#bbb'}}>
                                    Creating a social homebase for artists, thought-leaders, builders, scholars, and innovators in Web3.
                                </p>
                                <div className="smallDivider"></div>

                                <div style={{paddingTop: '15px', paddingLeft: '20px'}}>
                                <span style={{padding: '10px', paddingTop: '25px', borderBottom: '1px solid #222'}}>
                                    <a href={'#k'} style={{color: '#FFF', textDecoration: 'none'}}>Start <ArrowForwardIosIcon className='arrowIcon'/></a>
                                </span>
                                </div> 
                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Community-Owned and Operated through the:</h1>
                        <div className='divider'></div>
                    </Grid>

                </Grid>
            </Container>

            <Grid container>

                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bankless-coin.png'} alt="Bankless Coin" style={{maxWidth: '400px'}}/>
                    <h2 style={{paddingTop: '20px'}}>BANK Token</h2>
                </Grid>

                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/ethereum-icon.png'} alt="Ethereum" style={{maxWidth: '280px'}} />
                    <h2 style={{paddingTop: '20px'}}>Ethereum Blockchain</h2>
                </Grid>

                <Grid item xs={12} md={12}>
                    <h1 style={{textTransform: 'uppercase', color: '#111', textAlign: 'center', letterSpacing: '10px'}}>The Most Widely-held social token</h1>
                </Grid>
            </Grid>
        </div>

    )
}