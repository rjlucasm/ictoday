import Image from 'next/image'

const trippysrc = "https://internetcomputer.today/trippy_ic_logo.png";
const Footer = () => (
    <footer className="footer">
        Powered by
        <span>
            <a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer">Dfinity</a>
        </span>

        <span>
            <a href="https://fleek.co/" target="_blank" rel="noopener noreferrer">Fleek</a>
        </span>

        <span>
            <a href="https://www.coingecko.com/en/api" target="_blank" rel="noopener noreferrer">Coingecko</a>
        </span>

        |

        {/* <span>
            <a style={{ color: 'blue' }} href="https://icscan.io/account/5a8d75e42bf41fd4eb91a25ea2bd8fcb9ffbad8bcd2dd7c16f9f9304b702c5fb" target="_blank" rel="noopener noreferrer">Donate</a>
        </span> */}

        <div className="credits">
            <a href="https://usertest.icp.page/" target="_blank" rel="noopener noreferrer"><Image src={trippysrc} alt="usertest" width={35} height={15}/></a>
        </div>
        
    </footer>
);

export default Footer;