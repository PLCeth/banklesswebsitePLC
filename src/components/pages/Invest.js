import { Container, Grid, Button } from '@mui/material'
import * as React from 'react'
import { Fade, Slide } from 'react-reveal'

export const Invest = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Fade>
                        <img src={process.env.PUBLIC_URL + '/assets/media/banktoken.webp'} alt="Bank Token" style={{maxWidth: '100%'}} />
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Fade>
                        <h1 style={{fontSize: '2.5em'}}>BANK</h1>
                        <h2 style={{color: '#f00', padding: '10px'}}>The Most widely-held Token</h2>
                        <p style={{padding: '20px'}} className="textWreck">BANK is the native token of BanklessDAO. As a tool for the Bankless community, 
                        it determines membership level and voting power in on-chain votes. To be a Level 1 member, which means you can 
                        access the Discord server without needing a guest pass, you must hold 35,000 BANK.</p>
                        <p className='borderBox' style={{padding: '15px', maxWidth: '400px'}}>
                            BANK is available on both 
                            <a href="https://app.uniswap.org/#/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH&chain=mainnet" className="destyle redText" target={"_blank"} rel="noreferrer"> Uniswap</a> and 
                            <a href="https://app.sushi.com/swap?inputCurrency=0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198&outputCurrency=ETH" className="destyle redText" target={"_blank"} rel="noreferrer"> Sushiswap</a> and can be earned by working in the DAO. 
                            Many guest pass holders earn their 35,000 BANK rather than buy it outright.</p>
                        <p>Current market cap and price is <a href="https://www.coingecko.com/en/coins/bankless-dao" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" style={{borderRadius: '0', backgroundColor: 'transparent', border: '2px solid #f00'}}>Available Here</Button></a></p>
                        </Fade>
                    </Grid>

                    <Grid item xs={12} md={8} style={{padding: '20px', paddingRight: '30px'}}>
                        <Slide up>
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
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={3} style={{textAlign: 'center'}}>
                        <Slide up>
                        <img src={process.env.PUBLIC_URL + '/assets/media/bedindex.webp'} alt="Bank Token" style={{maxWidth: '100%'}} className="hideMobile" />
                        </Slide>
                    </Grid>
                </Grid>

                <Grid container style={{justifyContent: 'center', paddingBottom: '100px', paddingTop: '70px'}}>
                    <Grid item xs={12} md={8}>
                        <Fade>
                        <h1>GMI INDEX</h1>
                        <div style={{display: 'flex'}}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>

                        <h1 className='redText'>Are you GMI?</h1>
                        <div>
                        <p>The Bankless DeFi Innovation Index, called the GMI Index for the rally cry 
                            “we’re all gonna make it” is another investment vehicle springing from the 
                            Index Coop/BanklessDAO partnership. Like the BED Index, GMI captures a broad 
                            swath of DeFi exposure while also tapping into gains from sophisticated products such as yield-bearing tokens.</p>
                        </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={4} style={{justifyContent: 'center', alignItems: 'flex-end', display: 'flex'}}>
                        <a href="https://app.indexcoop.com/gmi" target="_blank" rel="noreferrer" className='destyle'>
                        <Button color="error" variant="contained">Invest in GMI Index</Button>
                        </a>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Fade>
                     <img src={process.env.PUBLIC_URL + '/assets/media/daopunks.webp'} alt="DAO Punks" style={{maxWidth: '100%'}} />
                     </Fade>
                    </Grid>
                    <Grid item xs={12} md={7} style={{padding: '25px'}}>
                        <h1>DAO Punks</h1>
                        <p>DAOpunks launched in 2021 with the mission of helping to free all humans from the soul-sucking drudgery of default world work. 
                            They do that work through providing grants to those who seek to leave the CORPrat life for the meaningful work found in DAOs.</p><p>
                            Holders of a DAOpunk NFT enjoy access to gated channels, but the community is open to anyone with an interest in DAOs. 
                            In addition to grants, the DAOpunks have a newsletter, podcast, and merch arm, and are always spinning new ideas into actionable 
                            content. DAOpunks is at the edge of DAO governance, and is pushing the boundaries of where technology meets on-chain voting 
                            and automatic treasury triggers.</p>
                            <a href="https://opensea.io/collection/daopunksnft" target="_blank" rel="noreferrer" className='destyle'>
                            <Button color="error" variant="contained">Invest in DAO Punks</Button>
                            </a>
                    </Grid>

                    <Grid item xs={12} md={6} style={{paddingTop: '60px'}}>
                        <Slide up>
                        <h1>Chippi</h1>
                        <p className='borderBox' style={{padding: '15px', maxWidth: '400px'}}>
                        Chippi are hand-drawn 1-of-1s from BanklessDAO contributor Perchy. These profile pictures (PFPs) are members of the Chippiverse, 
                        playing a role in “The Future is DAO” storyline. Chippi inhabit the Bankless Nation, a series of art pieces available as NFTs.

                        <div style={{textAlign: 'center', paddingTop: '30px'}}>
                        <a href="https://opensea.io/collection/chippi" target="_blank" rel="noreferrer" className='destyle'>
                            <Button color="error" variant="contained">Invest in Chippi</Button>
                        </a>
                        </div>
                        </p>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} md={6} style={{paddingTop: '60px', paddingBottom: "100px"}}>
                        <Slide up>
                        <h1>BanklessDAO Weekly NFT Showcase</h1>
                        <p className='borderBox' style={{padding: '15px', maxWidth: '400px'}}>
                        BanklessDAO is embedded in the creative space of NFTs and a champion for artists paving the way in digital art forms. Weekly features can be found on BanklessDAO's Rarible page or the Weekly Rollup newsletter.

                        <div style={{textAlign: 'center', paddingTop: '30px'}}>
                        <a href="https://rarible.com/banklessdao/sale" target="_blank" rel="noreferrer" className='destyle'>
                            <Button color="error" variant="contained">Invest in NFT's</Button>
                        </a>
                        </div>
                        </p>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}