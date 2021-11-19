import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/@cover_ois/cover-code-verification-for-canisters-on-the-internet-computer-as-an-open-internet-service-129b9b9ddbb9" target="_blank" rel="noopener noreferrer">Cover ✅: Code Verification for Canisters on the Internet Computer as an Open Internet Service</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;