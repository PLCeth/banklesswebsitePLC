import { Container, Grid } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'

export const Read = (props) => {

    return (
        <div style={{minHeight: '100vh', paddingTop: '50px'}}>
            <Container style={{position: 'relative'}}>
            <Fade>
            <h1>Decentralizing media one article at a time</h1>
            <p className='textWreck' style={{maxWidth: '600px'}}>BanklessDAO is building the first decentralized publishing house ever. Our newsletters and articles are translated into a variety of languages to reach a global audience. Find your crypto reading materials right here.</p>
            
            <img src={process.env.PUBLIC_URL + '/assets/media/readpen.webp'} alt="pen" style={{position: 'absolute', top: '0', right: '0'}} className='hideMobile' />
            <div className="bgRed"></div>
            </Fade>

            <Grid container style={{position: 'relative', paddingTop: '50px'}}>

                <Grid item xs={12} md={3}>
                    <Slide up>
                    <img src={process.env.PUBLIC_URL + '/assets/media/icon_medium.webp'} alt="medium" style={{backgroundColor: '#fff3', padding: '10px', borderRadius: '10px'}} />
                    <h3>Medium Article</h3>
                    <p className='textWreck' style={{maxWidth: '250px'}}>Crypto and Web3 commentary representing the voice of the DAO.</p>
                    </Slide>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Slide up>
                    <img src={process.env.PUBLIC_URL + '/assets/media/icon_mirror.webp'} alt="mirror" style={{backgroundColor: '#fff3', padding: '10px', borderRadius: '10px'}} />
                    <h3>Mirror Article</h3>
                    <p className='textWreck' style={{maxWidth: '250px'}}>BanklessDAO history and season recaps posted publicly.</p>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <Fade>
                    <h1>Newsletters</h1>
                    <div className='divider' style={{marginLeft: '0', marginTop: '0'}}></div>

                    { /* Newsletter Box */ }
                    <Grid container style={{position: 'relative'}}>
                        <div className='readBg'></div>
                        <Grid item xs={12} md={4} style={{padding: '20px'}} >
                            <div style={{backgroundColor: '#111', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: '1', minHeight: '380px'}} className='mobileAdj'>
                            <h1>The Weekly Rollup</h1>
                            <p className='textWreck'>Weekly summary of everything that happens in bDAO.  It's the place to stay updated with the DAO.</p>
                            <div>View</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '20px'}}>
                            <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
                            <div className='textWreck' style={{backgroundColor: '#111', borderRadius: '20px', minHeight: '150px', padding: '20px', marginBottom: '20px'}}>
                                <h1>Decentralized Art</h1>
                                <p className='textWreck'>Weekly Crypto Art and NFT Newsletter</p>
                                <div>View</div>
                            </div>
                            <div style={{backgroundColor: '#111', borderRadius: '20px', minHeight: '140px', marginTop: '10px', padding: '20px'}}>
                                <h1>State of the DAOs</h1>
                                <p className='textWreck'>The high-signal-low-noise DAO ecosystem newsletter.</p>
                                <div>View</div>
                            </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '20px'}}>
                            <div style={{ backgroundColor: '#111', borderRadius: '20px', padding: '20px', position: 'relative', minHeight: '380px'}} className='mobileAdj'>
                            <h1>Decentralized Law</h1>
                            <p className='textWreck'>The premier legal newsletter in the crypto space, publishing cutting-edge legal scholarship 
                                twice a month.
                            </p>
                            <div>View</div>
                            <img className="hideMobile" src={process.env.PUBLIC_URL + '/assets/media/read_token.webp'} alt="mirror" style={{maxWidth: '100%', position: 'absolute', left: '-70px', bottom: '-200px'}} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} style={{padding: '20px'}}>
                            <div style={{backgroundColor: '#111', padding: '20px', borderRadius: '20px'}}>
                                <h1>Gearing Up</h1>
                                <p className='textWreck'>Weekly bDAO project and guild highlights newsletter to help members stay up to speed on all internal bDAO updates.</p>
                                <div>View</div>
                            </div>
                        </Grid>
                    </Grid>



                    </Fade>
                </Grid>

                <Grid item xs={12} md={12} style={{padding: '20px'}}>
                    <Slide up>
                    <h1 style={{fontSize: '2.5em'}}>Satire</h1>
                    <Grid container style={{padding: '10px'}}>
                        <Grid item xs={12} md={3} style={{padding: '10px'}}>
                            <p className='textWreck' style={{padding: '10px'}}>A satire publication that takes money, seriously. Read and collect NFTs of their editions on Mirror and follow along on Twitter.</p>
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '10px'}}>
                            <div style={{display: 'flex'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/icon_mirror.webp'} alt="mirror" style={{padding: '10px', borderRadius: '10px'}} />
                            <h3 style={{paddingLeft: '10px'}}>Mirror</h3>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '10px'}}>
                            <h3>Twitter</h3>
                            <p>Follow Satire on Twitter.</p>
                        </Grid>
                    </Grid>
                    </Slide>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Fade>
                    <h1 style={{textAlign: 'center'}}>International Media Nodes</h1>
                    <div className='divider' ></div>
                    <p className='textWreck' style={{textAlign: 'center'}}>
                        International Media Nodes (IMN) are Bankless channels that spread the message of the Bankless movement beyond North America.  
                        They translate BanklessDAO content, publish original pieces, run Twitter pages and ship newsletters. Find their home pages below.</p>

                    <Grid container style={{textAlign: 'center'}}>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/bhutan.webp'} alt="bhutan" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/sweden.webp'} alt="sweden" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/greece.webp'} alt="greece" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>

                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/turkey.webp'} alt="turkey" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/bulgaria.webp'} alt="bulgaria" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/japan.webp'} alt="japan" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                    </Grid>
                    </Fade>
                </Grid>
            </Grid>
            
            </Container>
        </div>
    )
}