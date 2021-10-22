import Link from 'next/link'

const Sites = () => (
  <>
    <div className="grid">
       <div className="card">
         <h4>Websites</h4> 
         <p><a href="https://internetcomputer.org/" target="_blank" rel="noopener noreferrer">ICA</a></p>
         <p><a href="https://smartcontracts.org/" target="_blank" rel="noopener noreferrer">SDK</a></p>
         <p><a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer">Dfinity</a></p>
         <p><a href="https://thereboot.com/" target="_blank" rel="noopener noreferrer">The Reboot</a></p>
         <p><a href="https://medium.com/dfinity" target="_blank" rel="noopener noreferrer">Medium</a></p>
       </div>

       <div className="card">
         <h4>Wallets</h4> 
         <p><a href="https://nns.ic0.app/" target="_blank" rel="noopener noreferrer">NNS</a></p>
         <p><a href="https://www.stoicwallet.com/" target="_blank" rel="noopener noreferrer">Stoic</a></p>
         <p><a href="https://plugwallet.ooo/" target="_blank" rel="noopener noreferrer">Plug</a></p>
         <p><a href="https://www.earthwallet.io/" target="_blank" rel="noopener noreferrer">Earth</a></p>
       </div>

       <div className="card">
         <h4>Explorers</h4> 
         <p><a href="https://ic.rocks/" target="_blank" rel="noopener noreferrer">IC Rocks</a></p>
         <p><a href="https://www.dfinityexplorer.org/#/" target="_blank" rel="noopener noreferrer">Dfinity Explorer</a></p>
         <p><a href="https://dashboard.internetcomputer.org/" target="_blank" rel="noopener noreferrer">Network Status</a></p>
         <p><a href="https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Icpscan</a></p>
       </div>

       <div className="card">
         <Link href="/services"><a><h4>Services</h4></a></Link>
         <p><a href="https://faucet.dfinity.org/auth" target="_blank" rel="noopener noreferrer">Cycles Faucet</a></p>
         <p><a href="https://identity.ic0.app/" target="_blank" rel="noopener noreferrer">Internet Identity</a></p>
         <p><a href="https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Motoko Playground</a></p>
         <p><a href="https://networknervoussystem.com/" target="_blank" rel="noopener noreferrer">Neuron Calculator</a></p>
         <p><a href="https://icp.guide/" target="_blank" rel="noopener noreferrer">ICP Guide</a></p>
         <p><a href="https://k7gat-daaaa-aaaae-qaahq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Canlista</a></p>
       </div>

       <div className="card">
         <h4>Community</h4> 
         <p><a href="https://twitter.com/dfinity" target="_blank" rel="noopener noreferrer">Twitter</a></p>
         <p><a href="https://www.reddit.com/r/dfinity/" target="_blank" rel="noopener noreferrer">Reddit</a></p>
         <p><a href="https://discord.com/invite/cA7y6ezyE2" target="_blank" rel="noopener noreferrer">Discord</a></p>
         <p><a href="https://t.me/dfinity/" target="_blank" rel="noopener noreferrer">Telegram</a></p>
         {/* <p><a href="https://www.facebook.com/dfinity.org" target="_blank" rel="noopener noreferrer">Facebook</a></p> */}
         <p><a href="https://www.youtube.com/dfinity" target="_blank" rel="noopener noreferrer">Youtube</a></p>
         <p><a href="https://forum.dfinity.org/" target="_blank" rel="noopener noreferrer">Forum</a></p>
       </div>

       <div className="card">
         <h4>Source Code</h4> 
         <p><a href="https://github.com/dfinity" target="_blank" rel="noopener noreferrer">Github</a></p>
       </div>
    </div>

    <div className="sitegrid">
      <div className="card">
         <h4>Dapps</h4> 
         <p><a href="https://dscvr.one/" target="_blank" rel="noopener noreferrer">Dscvr</a></p>
         <p><a href="https://distrikt.app/" target="_blank" rel="noopener noreferrer">Distrikt</a></p>
         <p><a href="https://oc.app/" target="_blank" rel="noopener noreferrer">Open Chat</a></p>
         <p><a href="http://icdrive.co/" target="_blank" rel="noopener noreferrer">IC Drive</a></p>
         <p><a href="https://portal.one/" target="_blank" rel="noopener noreferrer">Portal</a></p>
      </div>

      <div className="card">
         <h4>Blogs</h4> 
         <p><a href="https://cycledao.xyz/blog" target="_blank" rel="noopener noreferrer">Cycle_dao</a></p>
         <p><a href="https://www.dfinitycommunity.com/" target="_blank" rel="noopener noreferrer">Dfinity Community</a></p>
         <p><a href="https://www.ic.community/" target="_blank" rel="noopener noreferrer">IC Community</a></p>
         <p><a href="https://dfinityclub.medium.com/" target="_blank" rel="noopener noreferrer">Dfinity Club</a></p>
         <p><a href="https://medium.com/icp-league" target="_blank" rel="noopener noreferrer">ICP League</a></p>
      </div>

      <div className="card">
         <h4>Podcasts</h4> 
         <p><a href="https://www.buzzsprout.com/1790339" target="_blank" rel="noopener noreferrer">The IC Weekly</a></p>
         <p><a href="https://ic3o3-qiaaa-aaaae-qaaia-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Demergence</a></p>
         <p><a href="https://www.icp.report/videos" target="_blank" rel="noopener noreferrer">The IC Report</a></p>
      </div>

      <div className="card">
         <Link href="/nft"><a><h4>NFTs</h4></a></Link>
         <p><a href="https://cronic.toniqlabs.com/" target="_blank" rel="noopener noreferrer">Cronic</a></p>
         <p><a href="https://entrepot.app/" target="_blank" rel="noopener noreferrer">Entrepot</a></p>
         <p><a href="https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/" target="_blank" rel="noopener noreferrer">NFT Village</a></p>
         <p><a href="https://icpuppies.io/" target="_blank" rel="noopener noreferrer">ICPuppies</a></p>
         <p><a href="https://icpunks.com/" target="_blank" rel="noopener noreferrer">ICPunks</a></p>
         <p><a href="https://dvr6e-lqaaa-aaaai-qam5a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">IC Drip</a></p>
      </div>

      <div className="card">
         <Link href="/games"><a><h4>Games</h4></a></Link>
         <p><a href="https://qwsdo-xaaaa-aaaah-aaa3a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">2048</a></p>
         <p><a href="https://neqb2-dyaaa-aaaad-qameq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">HexGL</a></p>
         <p><a href="https://bgvbu-biaaa-aaaae-aaava-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Netwalk</a></p>
         <p><a href="https://riseofthemagni.com/" target="_blank" rel="noopener noreferrer">ROTM</a></p>
         <p><a href="https://omro3-5yaaa-aaaad-qalta-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Sudoku</a></p>
         <p><a href="https://o2wyr-ryaaa-aaaah-qad2q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Tetris</a></p>    
      </div>
    </div>
    
    <div className="finalgrid">
      <div className="finalcard">
        <Link href="/watchlist"><a>Watchlist</a></Link> 
      </div>
      <div className="finalcard">
        <Link href="/news/2021"><a>News</a></Link> 
      </div>
    </div>
    
    
  </>
);

export default Sites;