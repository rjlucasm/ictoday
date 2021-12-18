import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/the-internet-computers-long-term-r-d-plans-motion-proposals-guide-dce6fdcd697d" target="_blank" rel="noopener noreferrer">The Internet Computer&apos;s Roadmap Guide: 25 Motion Proposals Outlining New Areas for Crypto Innovation</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;