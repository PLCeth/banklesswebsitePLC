import { Grid, Button } from '@mui/material'
import { Slider } from './ContentSlider'

export const slidesOne = [
    new Slider("Bankless Consulting", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/bconsulting.png'} alt="Bankless Consulting" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="biggerText">Our Web3-native consulting service draws on the expertise of bDAO members to help DAOs launch and scale their presence.
                    Bankless Consultancy also helps traditional organizations take the first step into Web3.</p> 
                <a href="https://www.banklessconsulting.com/" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Consulting</Button></a>
            </Grid>
        </Grid>
    ), 0),
    new Slider("Bankless Academy", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/banklessacademy.jpg'} alt="Bankless Academy" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">The Bankless Academy is on a mission to introduce 1 billion people to the exciting possibilities of cryptocurrency, DeFi, and beyond.
Whether you're curious about crypto, intrigued by NFTs, or want to get started the latest DeFi protocols, we're here to help guide and accelerate your journey to Web3 proficiency.
</p> 
                <a href="https://app.banklessacademy.com/" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Academy</Button></a>
            </Grid>
        </Grid>
    ), 1),
    new Slider("Global Tax Consultancy", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/taxconsultancy.jpg'} alt="Bankless tax consultancy" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">The Global Tax Guide will provide general introductory information regarding virtual-currency-related income tax laws from major jurisdictions throughout the world. Access to the Global Tax Guide will be granted by minting Form 69.</p> 
                <a href="https://newsletter.banklesshq.com/p/ultimate-crypto-tax-guide?s=r" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit the Ultimate Crypto Tax Guide</Button></a>
            </Grid>
        </Grid>
    ), 2)
]


export const slidesTwo = [
    new Slider("Degen", (
        <Grid container>

            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="biggerText">Our Web3-native consulting service draws on the expertise of bDAO members to help DAOs launch and scale their presence.
                    Bankless Consultancy also helps traditional organizations take the first step into Web3.</p> 
                <a href="https://docs.bankless.community/degen/introduction/welcome" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Degen</Button></a>
            </Grid>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/degen.jpg'} alt="degen" style={{maxWidth: '100%'}} />
            </Grid>
        </Grid>
    ), 0),
    new Slider("Bounty Board", (
        <Grid container>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">I changed it.</p> 
                <a href="https://www.bountyboard.xyz/" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bounty Board</Button></a>
            </Grid>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/bountyboard.jpg'} alt="Bankless Academy" style={{maxWidth: '100%'}} />
            </Grid>
        </Grid>
    ), 1),
    new Slider("DAO Dash", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/daodash.jpg'} alt="Bankless tax consultancy" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">DAO Dash will be the Analytics Guild's data ecosystem that will enable collaboration between its members in order to support Bankless DAO's mission.

DAO Dash will establish patterns for ingesting data pipelines from off-chain and on-chain data sources, establishing a collaborative query and analysis environment, and a front end dashboard to distribute visually appealing insights.</p> 
                <a href="https://bankless.notion.site/DAO-Dash-41a151ce8ef74fcd893cba3b47223828" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit DAO Dash</Button></a>
            </Grid>
        </Grid>
    ), 2)
]
