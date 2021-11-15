import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://beincrypto.com/internet-computer-icp-nfts-growing-in-popularity-as-master-bot-nft-sells-for-172000/" target="_blank" rel="noopener noreferrer">Internet Computer (ICP) NFTs Growing in Popularity as Master Bot NFT Sells for $172,000</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;