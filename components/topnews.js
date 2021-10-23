import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/developer-spotlight-origyn-rewarding-and-protecting-creativity-in-art-luxury-and-media-cd8943aa80bd" target="_blank" rel="noopener noreferrer">ORIGYN, Rewarding and Protecting Creativity in Art, Luxury, and Media</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;