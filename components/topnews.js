import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/the-internet-computers-transaction-speed-and-finality-outpace-other-l1-blockchains-8e7d25e4b2ef" target="_blank" rel="noopener noreferrer">The Internet Computer&apos;s Transaction Speed and Finality Outpace Other L1 Blockchains</a></p>
        <p><a href="https://cointelegraph.com/news/internet-computer-correction-risk-rises-after-icp-price-gains-nearly-60-in-5-days" target="_blank" rel="noopener noreferrer">Internet Computer: Correction risk rises after ICP price gains nearly 60% in 5 days</a></p>
        <p><a href="https://medium.com/icp-league/the-foundation-of-defi-how-does-icp-work-in-ic-containers-9e515a90e055" target="_blank" rel="noopener noreferrer">The foundation of DeFi, how does ICP work in IC containers?</a></p>
        <Link href="/news/2022"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;