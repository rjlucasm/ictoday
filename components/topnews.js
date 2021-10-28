import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/how-dapp-developers-placing-their-faith-in-total-decentralization-will-inherit-the-world-79419a3e36c9" target="_blank" rel="noopener noreferrer">Why Totally Decentralizing Dapps Wins, And How To Do It</a></p>
        <p><a href="https://medium.com/psychedelic-dao/psychedelic-a-product-studio-dao-on-the-internet-computer-47145fa96700" target="_blank" rel="noopener noreferrer">Psychedelic: A Product Studio DAO on the Internet Computer</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;