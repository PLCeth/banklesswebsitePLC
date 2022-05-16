import { Grid, Container } from '@mui/material'
import * as React from 'react'


export const Footer = (props) => {


    return (
        <div>
            <div className="elip"></div>
            <Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img src={process.env.PUBLIC_URL + '/assets/media/bankless.png'} alt="Bankless" style={{maxHeight: '75px'}} />
                    <p style={{maxWidth: '300px', lineHeight: '1.5em', textAlign: 'justify'}}>
                        A decentralized autonomus organization that acts as a steward of the Bankless Movement progressing the world towards a future
                        of greater freedom.
                    </p>
                    <div>

                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div><a href="https://pro.olympusdao.finance/#/bond" className='destyle' target="_blank" rel="noreferrer">Join Olympus Pro</a></div>
                        <div><a href="https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198" className="destyle" target="_blank" rel="noreferrer">BANK</a></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div><a href="https://dyor-crypto.fandom.com/wiki/Bankless_DAO_(BANK)" className="destyle" target="_blank" rel="noreferrer">Wiki</a></div>
                        <div><a href="https://forum.bankless.community/privacy" className="destyle" target="_blank" rel="noreferrer">Privacy</a></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div><a href="https://forum.bankless.community/" className="destyle" target="_blank" rel="noreferrer">Forum</a></div>
                        <div><a href="https://github.com/BanklessDAO" className="destyle" target="_blank" rel="noreferrer">Github</a></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
                        <div><a href="https://snapshot.org/#/banklessvault.eth" className="destyle" target="_blank" rel="noreferrer">Vote</a></div>
                        <div><a href="https://www.twitch.tv/banklessdao" className="destyle" target="_blank" rel="noreferrer">TwitchTV</a></div>
                    </div>
                </Grid>
            </Grid>
            </Container>
            <Container>
            <div style={{padding: '20px', color: '#999', paddingTop:'50px'}}>GoBankless &copy; 2022. All Rights Reserved.</div>
            </Container>
        </div>
    )
}