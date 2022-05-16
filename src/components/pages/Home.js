import { Button, Container, Grid } from '@mui/material'
import * as React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const HomePage = (props) => {


    return (
        <div style={{paddingBottom: '100px'}}>
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
                    <img src={process.env.PUBLIC_URL + '/assets/media/bankless-coin.png'} alt="Bankless Coin" style={{maxWidth: '300px'}}/>
                    <h2 style={{paddingTop: '20px'}}>BANK Token</h2>
                </Grid>

                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textAlign: 'center', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/ethereum-icon.png'} alt="Ethereum" style={{maxWidth: '200px'}} />
                    <h2 style={{paddingTop: '20px'}}>Ethereum Blockchain</h2>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '100px', paddingBottom: '100px'}}>
                    <h1 style={{textTransform: 'uppercase', color: '#222', textAlign: 'center', letterSpacing: '10px'}}>The Most Widely-held social token</h1>
                </Grid>
            </Grid>

            <Container>
                <div className='whiteBox'>
                    <h2 style={{textAlign: 'center', color:'#000'}}>Onboarding 1 billion people, Minting 1 billion BANK tokens</h2>
                    <div style={{display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap'}}>
                        <Button variant="contained" color="error" style={{marginBottom: '10px'}}>Buy BANK</Button>
                        <Button variant="contained" style={{backgroundColor: '#FFF', color: '#F00'}}>BANK TOKEN LEGAL ASSESSMENT</Button>
                    </div>
                </div>


                <Grid container style={{paddingTop: '100px'}}>
                    <Grid item xs={6} md={3}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/david-hoffman.jpg'} alt="David Hoffman" className='circledPic' style={{boxShadow: '-18px 0px 35px red'}} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="Ryan Sean Adams" className='circledPic' style={{boxShadow: '18px 0px 35px red'}}  />
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <div style={{fontSize: '1.4em', color: '#999', lineHeight: '1.5em'}}>
                            BanklessDAO was founded by <span style={{fontWeight: 'bold', color: '#FFF'}}>David Hoffman</span> and <span style={{fontWeight: 'bold', color: '#FFF'}}>Ryan Sean Adams</span> on May 4th, 2021, when they airdropped 35,000 BANK tokens to 
                            each Bankless premium subscriber.
                        </div>
                    </Grid>

                    <Grid item xs={12} md={12} style={{textAlign: 'center', lineHeight: '1.75em', padding: '20px', color: '#999', paddingTop: '75px'}}>
                    Following the true ethos of decentralization, they stepped back and let the DAO take shape. While their media company, Bankless LLC, 
                    continues to operate as its own media node, the Bankless brand is propagated through the DAO and its sub-DAOs. Now, the Bankless ecosystem 
                    as a whole creates user-friendly onramps for people to discover decentralized financial technologies through education, media and culture.
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Treasury Multi-Sig Owners</h1>
                        <div className='divider'></div>
                    </Grid>

                    { /* People Grid */ }
                    <Grid container style={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>LivetheLifeTV</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3 >Kouros</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3 >0xLucas</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>Eagle.eth</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>tommyolofsson</h3>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={12} style={{paddingTop: '75px'}}>
                        <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>Grants Committee Members</h1>
                        <div className='divider'></div>
                    </Grid>

                    <Grid container style={{display: 'flex', justifyContent: 'center'}}>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>LivetheLifeTV</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3 >Kouros</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3 >0xLucas</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>Eagle.eth</h3>
                        </Grid>
                        <Grid item xs={6} md={4} style={{textAlign: 'center'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/ryan-sean-adams.jpg'} alt="pic" className='circledPic' style={{boxShadow: '-8px 0px 13px red'}}  />
                            <h3>tommyolofsson</h3>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid container style={{paddingTop: '100px', paddingBottom: '100px'}}>
                    <Grid item xs={12} md={6}>
                        <h1>Start Your Journey</h1>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}