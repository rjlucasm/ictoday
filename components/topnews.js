import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/cap-ois/cap-is-live-on-mainnet-transaction-history-provenance-on-the-internet-computer-85feb42fbb4e" target="_blank" rel="noopener noreferrer">CAP is Live on Mainnet! 🚀 Transaction History &amp; Provenance on the Internet Computer</a></p>
        <p><a href="https://medium.com/dfinity/in-progress-nns-proposal-to-end-the-imminent-unclaimed-seed-neuron-sweep-4855ac84357c" target="_blank" rel="noopener noreferrer">In Progress: NNS Proposal To End The Imminent Unclaimed Seed Neuron Sweep</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;