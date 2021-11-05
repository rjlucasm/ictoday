import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/motoko-the-internet-computers-native-language-turns-two-a32c3c5ab704" target="_blank" rel="noopener noreferrer">Motoko, the Internet Computer’s Native Language, Turns Two</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;