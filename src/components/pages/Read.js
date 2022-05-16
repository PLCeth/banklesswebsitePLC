import { Container, Grid } from '@mui/material'
import * as React from 'react'


export const Read = (props) => {

    return (
        <div style={{minHeight: '100vh', paddingTop: '50px'}}>
            <Container style={{position: 'relative'}}>
            <h1>Decentralizing media one article at a time</h1>
            <p className='textWreck' style={{maxWidth: '600px'}}>BanklessDAO is building the first decentralized publishing house ever. Our newsletters and articles are translated into a variety of languages to reach a global audience. Find your crypto reading materials right here.</p>
            
            <img src={process.env.PUBLIC_URL + '/assets/media/readpen.png'} alt="pen" style={{position: 'absolute', top: '0', right: '0'}} className='hideMobile' />
            
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
            </Grid>
            
            </Container>
        </div>
    )
}