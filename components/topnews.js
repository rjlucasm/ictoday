import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://www.the-sun.com/money/4180620/internet-computer-icp-price-prediction/" target="_blank" rel="noopener noreferrer">Internet Computer price prediction: Can ICP reach $100 this year?</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;