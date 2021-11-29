import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/@DBOXFoundation/presenting-dbox-the-dapp-inbox-that-will-supercharge-the-blockchain-ecosystem-8cf8678a7827" target="_blank" rel="noopener noreferrer">Presenting dbox: the inbox of the Internet Computer</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;