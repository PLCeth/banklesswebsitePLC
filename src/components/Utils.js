export const Arrow = () => {
    return (
    <img src={process.env.PUBLIC_URL + '/assets/media/icon_arrow.png'} style={{paddingLeft: '10px', maxWidth: '25px', maxHeight: '25px'}} alt="arrow" />
    )
}

class Link {
    constructor(icon, link) {
        this.icon = icon;
        this.link = link;
    }
}

export const IconBar = () => {

    const Icons = [
        new Link("/assets/media/icons/medium.png", "https://medium.com/bankless-dao"),
        new Link("/assets/media/icons/mirror.png", "https://banklessdao.mirror.xyz/"),
        new Link("/assets/media/icons/union.png", "https://bankless-new.netlify.app/about-us#"),
        new Link("/assets/media/icons/twitter.png", "https://twitter.com/banklessDAO"),
        new Link("/assets/media/icons/discord.png", "https://discord.com/invite/bankless"),
        new Link("/assets/media/icons/notion.png", "https://bankless.notion.site/bankless/BanklessDAO-82ba81e7da1c42adb7c4ab67a4f22e8f"),
        new Link("/assets/media/icons/snapshot.png", "https://snapshot.org/#/banklessvault.eth"),
        new Link("/assets/media/icons/etherscan.png", "https://etherscan.io/token/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198h"),
        new Link("/assets/media/icons/instagram.png", "https://www.instagram.com/banklessdao"),
        new Link("/assets/media/icons/dune.png", "https://dune.xyz/paulapivat/Bankless-DAO-Tipping-Economy"),
    ]

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', paddingBottom: '25px', paddingTop: '25px'}} className="justifyMob">
        { Icons.map((icon) => {
            return (
                <div>
                <a href={icon.link} className='destyle' target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + icon.icon} alt={icon.icon} style={{width: '25px', height: '25px', margin: '5px'}} />
                </a>
                </div>
            )
        })}
        </div>

    )
}


