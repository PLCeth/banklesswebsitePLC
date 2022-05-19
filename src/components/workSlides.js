import { Grid, Button } from '@mui/material'
import { Fade } from 'react-reveal'
import { Slider } from './ContentSlider'

export const slidesOne = [
    new Slider("Bankless Consulting", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/bconsulting.png'} alt="Bankless Consulting" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">Our Web3-native consulting service draws on the expertise of bDAO members to help DAOs launch and scale their presence.
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
                <p className="textWreck">Our Web3-native consulting service draws on the expertise of bDAO members to help DAOs launch and scale their presence.
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
                <p className="textWreck">PLC.eth changed it.</p> 
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



export const slidesThree = [
    new Slider("Audio/Visual Services", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/av.jpg'} alt="audio/visual services" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">Our AV Guild provides top-notch audio and visual services for Web3-native organizations.
                From audio production to voice-over talent to custom photography, bDAO's AV experts offer a service to level-up your organization's audio and visual assets. Commission an AV expert by filling out this form.</p> 
                <a href="https://www.notion.so/bankless/AudioVisual-Guild-64f9d5b6e62a45dc93391e4d075b40a9" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless AV Guild</Button></a>            </Grid>

        </Grid>
    ), 0),
    new Slider("Custom Articles", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/story.jpg'} alt="custom articles" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">PLC.eth changed it. Again.</p> 
                <a href="https://www.notion.so/bankless/Writers-Guild-585a90523b9f4630bc04892931a11f7d" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit the Writers Guild</Button></a>
            </Grid>
        </Grid>
    ), 1),
    new Slider("State of the DAOs Newsletter Feature", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/state.jpg'} alt="the state of the daos" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">State of the DAOs, the high-signal low-noise newsletter to understanding DAOs.</p> 
                <a href="https://banklessdao.substack.com/s/state-of-the-daos?utm_source=substack&utm_medium=menu" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit The State of the DAOs</Button></a>
            </Grid>
        </Grid>
    ), 2),
    new Slider("Custom Designs", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/cdesign.jpg'} alt="custom designs" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">BanklessDAO Design Guild offers next-gen visual services for Web3-native organizations. We are a team of professional designers that offers website designs, mobile app designs, pitch deck designs, logo, and branding creation who are well equipped with theoretical knowledge and software materials and possess hands-on experience.</p> 
                <a href="https://www.notion.so/Design-Guild-6f59223e601a4e418151b3622aa6b81c" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit the Design Guild</Button></a>
            </Grid>
        </Grid>
    ), 3)
]



export const slidesFour = [
    new Slider("Newsletter Sponsorships", (
        <Grid container>

            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">Sponsor any of our newsletters and reach tens of thousands of readers every week.
                    Choose from Weekly Rollup, State of the DAOs, Decentralized Art, Decentralized Law, and Gearing up, as well as a variety of languages, to reach your perfect audience. Inquire about sponsoring a newsletter by filling out this form.</p> 
                <a href="https://www.notion.so/Writers-Guild-585a90523b9f4630bc04892931a11f7d" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Newsletters</Button></a>
            </Grid>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/newsletter.jpg'} alt="degen" style={{maxWidth: '100%'}} />
            </Grid>
        </Grid>
    ), 0),
    new Slider("Podcast Sponsorships", (
        <Grid container>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">PLC.eth changed it. Again again.</p> 
                <a href="https://www.notion.so/bankless/AudioVisual-Guild-64f9d5b6e62a45dc93391e4d075b40a9" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless AV Guild</Button></a>
            </Grid>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/podcast.jpg'} alt="Bankless Academy" style={{maxWidth: '100%'}} />
            </Grid>
        </Grid>
    ), 1),
    new Slider("Marketing Services", (
        <Grid container>
            <Grid item xs={12} md={6} style={{padding: '25px'}}>
                <img src={process.env.PUBLIC_URL + '/assets/media/daodash.jpg'} alt="Bankless tax consultancy" style={{maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p className="textWreck">Bankless Consulting is the world's first web3-native consulting firm. Whether you're a DAO or a traditional enterprise, we'll help you capture the potential of the rapidly expanding decentralized economy.</p> 
                <a href="https://www.banklessconsulting.com/" target="_blank" rel="noreferrer" className='destyle'><Button variant="contained" color="error">Visit Bankless Consulting</Button></a>
            </Grid>
        </Grid>
    ), 2)
]
