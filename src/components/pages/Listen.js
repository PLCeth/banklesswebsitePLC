import { Button, Container, Grid } from '@mui/material'
import * as React from 'react'


export const Listen = (props) => {

    return (
        <div style={{minHeight: '100vh'}}>
            <Container style={{paddingTop: '100px'}}>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '20px'}}>
                        <h1 >The Podcast Hatchery</h1>
                        <p style={{ lineHeight: '1.5em', fontSize: '1.3em'}}>Incubates audio storytelling projects. The team helps new podcasters find their audience, 
                            build their unique storytelling identity, and explore Web3 through interviews with thought-leaders in the space.</p>
                        <a href="https://open.spotify.com/show/1jLNOoJv77K733rZzL4c6b" target="_blank" rel="noreferrer" className='destyle'><Button color="error" variant="contained">Podcast Hatchery</Button></a>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={process.env.PUBLIC_URL + '/assets/media/podcast-hatchery.png'} alt="podcast-hatchery" style={{maxWidth: '100%'}} />
                    </Grid>

                    <Grid item xs={12} md={4} style={{lineHeight: '1.5em', color: '#aaa', padding:'20px'}}>
                        <p>Check out these shows produced and hosted by members of BanklessDAO:</p>
                    </Grid>

                    <Grid item xs={8} md={8}></Grid>

                </Grid>
                <Grid container style={{justifyContent: 'center'}}>
                    <Grid item xs={12} md={4}  style={{padding: '20px'}}>
                        <div style={{backgroundColor: "#222", paddingBottom: '50px', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                            <h1 className='centered'>Crypto Sapiens</h1>
                            <div className='centered'>Hosted By <span style={{color: '#f00'}}>Humpty</span></div>
                            <p className='textWreck'>Crypto Sapiens hosts discussions with innovative Web3 builders to help everyone learn about decentralized money systems including Ethereum, Bitcoin, and DeFi. It empowers people with information to better understand the complex crypto ecosystem and go from crypto curious to crypto natives.</p>
                            <ul className='textWreck'>
                                <li>Listen on 
                                    <a href="https://open.spotify.com/show/3yS1Y61r0XkogChx12JQ2q" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> Spotify</a> and 
                                    <a href="https://podcasts.apple.com/us/podcast/crypto-sapiens/id1588346317" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> Apple Podcasts</a></li>
                                <li><a href="https://gitcoin.co/grants/5187/crypto-sapiens-podcast-gitcoin-grants-proposal" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}>Sponsor the Show</a></li>
                                    
                                <li>Follow on 
                                <a href="https://mobile.twitter.com/cryptosapiens_" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> Twitter</a> and 
                                <a href="https://www.instagram.com/cryptosapiensofficial/" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> Instagram</a></li>
                            </ul>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assets/media/cryptosapiens.png'} alt="crypto sapiens" 
                            style={{maxWidth: '100%', borderBottomLeftRadius: '50%', backgroundColor: '#222', borderBottomRightRadius: '50%'}} />
                    </Grid>

                    <Grid item xs={12} md={4} style={{padding: '20px'}}>
                        <div style={{backgroundColor: "#222", paddingBottom: '50px', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                            <h1 className='centered'>Making Bank</h1>
                            <div className='centered' style={{fontWeight: 'bold'}}>Organized by <span style={{color: '#f00'}}>Soundman</span> and hosted by members of the BanklessDAO community</div>
                            <p className='textWreck'>This show is focused primarily on highlighting various BanklessDAO members. Soundman helps give bDAO contributors a voice beyond their avatar by getting to know them on a more personal level and what they are doing in the Web3 space as a whole.</p>
                            <ul style={{paddingBottom: '35px'}} className='textWreck'>
                                <li>Listen on <a href="https://www.podbean.com/podcast-detail/pnwdu-202cc2/Making-%24BANK-Podcast" target="_blank" rel="noreferrer" className='destyle' style={{color: '#f00'}}> BanklessDAO’s Podbean</a></li>
                            </ul>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/assets/media/makingbank.png'} alt="crypto sapiens" 
                            style={{maxWidth: '100%', borderBottomLeftRadius: '50%', backgroundColor: '#222', borderBottomRightRadius: '50%'}} />
                    </Grid>



                    <Grid item xs={12} md={12}>
                        <h1 style={{textAlign: 'center', paddingTop: '50px'}}>Coming Soon</h1>
                        <div className='divider'></div>
                    </Grid>

                    <Grid item xs={12} md={6} style={{padding: '25px', marginBottom: '20px'}}>
                        <div className="graybox">
                        <h1 style={{padding: '10px', textAlign: 'center'}}>AB INITIO: FROM THE BEGINNING</h1>
                        <div className='centered'>Hosted By <span style={{color: '#f00'}}>ComeBackKid</span> and 
                        <a href="https://twitter.com/lion917_eth" className='destyle' target="_blank" rel="noreferrer"> Lion917</a></div>
                        <p style={{lineHeight: '1.5em'}}>A Legal Guild podcast series with each episode focusing on addressing current DAO and crypto-related legal issues via an interview with a subject matter expert.</p>
                        </div>
                    </Grid> 
                    <Grid item xs={12} md={6} style={{padding: '25px'}}>
                        <div className='graybox'>
                        <h1 style={{padding: '10px', textAlign: 'center'}}>BOUNTY HUNTER</h1>
                        <div className='centered'>Hosted By 
                        <a href="https://twitter.com/brandoncnolte" className='destyle' target="_blank" rel="noreferrer" style={{color: '#f00'}}> Brandon Nolte</a>
                        </div>
                        <p style={{lineHeight: '1.5em'}}>Bounty Hunter is a show about how to find engaging and rewarding work in the new Web3 economy. 
                        Join serial entrepreneur <a href="https://twitter.com/brandoncnolte" className='destyle' target="_blank" rel="noreferrer" style={{color: '#f00'}}>Brandon Nolte</a> as he interviews community builders, DAO contributors, and the best innovators in Web3. 
                        Follow Bounty Hunter on <a href="https://twitter.com/BountyxHunterx" className='destyle' target="_blank" rel="noreferrer">Twitter.</a></p>
                        </div>
                    </Grid> 

      
                </Grid>
            </Container>

            <div className='elipBG'>
                <Container>
                <Grid container>
                    <Grid item xs={12} md={6} style={{padding: '20px'}} >
                        <h1 style={{fontSize: '4em'}}>Have your own podcast idea?</h1>
                        <p style={{lineHeight: '1.5em', fontSize: '1.7em'}}>Join <a href="https://discord.com/invite/bankless" target="_blank" rel="noreferrer" className='destyle' style={{color: '#F00'}}>BanklessDAO</a> and get in contact with the Podcast Hatchery.</p>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>
    )
}