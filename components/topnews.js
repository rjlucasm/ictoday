import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/dfinity-announces-community-awards-program-to-supercharge-the-internet-computer-ecosystem-3c2eab6a4b98" target="_blank" rel="noopener noreferrer">DFINITY Announces Community Awards Program to Supercharge the Internet Computer Ecosystem</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;