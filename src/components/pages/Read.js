import { Container, Grid } from '@mui/material'
import * as React from 'react'


export const Read = (props) => {

    return (
        <div style={{minHeight: '100vh', paddingTop: '50px'}}>
            <Container style={{position: 'relative'}}>
            <h1>Decentralizing media one article at a time</h1>
            <p className='textWreck' style={{maxWidth: '600px'}}>BanklessDAO is building the first decentralized publishing house ever. Our newsletters and articles are translated into a variety of languages to reach a global audience. Find your crypto reading materials right here.</p>
            
            <img src={process.env.PUBLIC_URL + '/assets/media/readpen.png'} alt="pen" style={{position: 'absolute', top: '0', right: '0'}} className='hideMobile' />
            <div className="bgRed"></div>

            <Grid container style={{position: 'relative', paddingTop: '50px'}}>

              

                <Grid item xs={12} md={3}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/icon_medium.png'} alt="medium" style={{backgroundColor: '#fff3', padding: '10px', borderRadius: '10px'}} />
                    <h3>Medium Article</h3>
                    <p className='textWreck' style={{maxWidth: '250px'}}>Crypto and Web3 commentary representing the voice of the DAO.</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/icon_mirror.png'} alt="mirror" style={{backgroundColor: '#fff3', padding: '10px', borderRadius: '10px'}} />
                    <h3>Mirror Article</h3>
                    <p className='textWreck' style={{maxWidth: '250px'}}>BanklessDAO history and season recaps posted publicly.</p>
                </Grid>

                <Grid item xs={12} md={12} style={{paddingTop: '50px'}}>
                    <h1>Newsletters</h1>
                    <div className='divider' style={{marginLeft: '0', marginTop: '0'}}></div>
                </Grid>

                <Grid item xs={12} md={12} style={{padding: '20px'}}>
                    <h1 style={{fontSize: '2.5em'}}>Satire</h1>
                    <Grid container style={{padding: '10px'}}>
                        <Grid item xs={12} md={3} style={{padding: '10px'}}>
                            <p className='textWreck' style={{padding: '10px'}}>A satire publication that takes money, seriously. Read and collect NFTs of their editions on Mirror and follow along on Twitter.</p>
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '10px'}}>
                            <div style={{display: 'flex'}}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/icon_mirror.png'} alt="mirror" style={{padding: '10px', borderRadius: '10px'}} />
                            <h3 style={{paddingLeft: '10px'}}>Mirror</h3>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} md={4} style={{padding: '10px'}}>
                            <h3>Twitter</h3>
                            <p>Follow Satire on Twitter.</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12}>
                    <h1 style={{textAlign: 'center'}}>International Media Nodes</h1>
                    <div className='divider' ></div>
                    <p className='textWreck' style={{textAlign: 'center'}}>
                        International Media Nodes (IMN) are Bankless channels that spread the message of the Bankless movement beyond North America.  
                        They translate BanklessDAO content, publish original pieces, run Twitter pages and ship newsletters. Find their home pages below.</p>

                    <Grid container style={{textAlign: 'center'}}>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/bhutan.png'} alt="bhutan" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/sweden.png'} alt="sweden" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/greece.png'} alt="greece" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>

                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/turkey.png'} alt="turkey" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/bulgaria.png'} alt="bulgaria" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <img src={process.env.PUBLIC_URL + '/assets/media/japan.png'} alt="japan" style={{padding: '10px', maxWidth: '100%'}} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            </Container>
        </div>
    )
}