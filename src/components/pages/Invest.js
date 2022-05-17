import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'


export const Invest = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/banktoken.png'} alt="Bank Token" style={{maxWidth: '100%'}} />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <h1 style={{fontSize: '2.5em'}}>BANK</h1>
                        <h2 style={{color: '#f00', padding: '10px'}}>The Most widely-held Token</h2>
                        <p style={{padding: '20px'}} className="textWreck">BANK is the native token of BanklessDAO. As a tool for the Bankless community, 
                        it determines membership level and voting power in on-chain votes. To be a Level 1 member, which means you can 
                        access the Discord server without needing a guest pass, you must hold 35,000 BANK.</p>
                        <p className='borderBox' style={{padding: '15px', maxWidth: '400px'}}>
                            BANK is available on both <span className="redText">Uniswap</span> and <span className="redText">Sushiswap</span> and can be earned by working in the DAO. 
                            Many guest pass holders earn their 35,000 BANK rather than buy it outright.</p>
                        <p>Current market cap and price is <a href="https://www.coingecko.com/en/coins/bankless-dao" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" style={{borderRadius: '0', backgroundColor: 'transparent', border: '2px solid #f00'}}>Available Here</Button></a></p>
                    </Grid>

                    <Grid item xs={12} md={8} style={{padding: '20px', paddingRight: '30px'}}>
                        <h1>BED Index</h1>
                        <p className='redText'>The only index that can get ETH and BTC maxis in BED together</p>
                        <p className='textWreck'>The Bankless BED Index is a passive investment vehicle weighted 
                        equally in Bitcoin, Ethereum, and the DeFi Pulse Index (DPI), which tracks high-usage DeFi assets. 
                        This index gives you exposure to crypto without having to research DeFi projects or constantly rebalance your portfolio. 
                        This is a great first crypto investment for anyone just starting their crypto journey. 
                        The fund is a cooperation between BanklessDAO and Index Coop, a provider of DeFi investment products.</p>
                        <div>
                            <a href="https://app.indexcoop.com/bed" target="_blank" rel="noreferrer" className='destyle'>
                                <Button color="error" variant="contained" style={{margin: '10px'}}>Invest in BED index</Button>
                            </a>
                            <a href="#todo" target="_blank" rel="noreferrer" className='destyle'>
                            <Button color="error" variant="contained" style={{margin: '10px'}}>Learn more about Bed Index</Button>
                            </a>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3} style={{textAlign: 'center'}}>
                        <img src={process.env.PUBLIC_URL + '/assets/media/bedindex.png'} alt="Bank Token" style={{maxWidth: '100%'}} className="hideMobile" />
                    </Grid>
                </Grid>

                <Grid container style={{justifyContent: 'center', paddingBottom: '100px'}}>
                    <Grid item xs={12} md={8}>
                        <h1>GMI INDEX</h1>
                        <h1 className='redText'>Are you GMI?</h1>
                        <div>
                        <p>The Bankless DeFi Innovation Index, called the GMI Index for the rally cry 
                            “we’re all gonna make it” is another investment vehicle springing from the 
                            Index Coop/BanklessDAO partnership. Like the BED Index, GMI captures a broad 
                            swath of DeFi exposure while also tapping into gains from sophisticated products such as yield-bearing tokens.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} style={{justifyContent: 'center', alignItems: 'flex-end', display: 'flex'}}>
                        <a href="https://app.indexcoop.com/gmi" target="_blank" rel="noreferrer" className='destyle'>
                        <Button color="error" variant="contained">Invest in GMI Index</Button>
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}