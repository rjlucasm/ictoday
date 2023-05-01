import Link from 'next/link'

const Sites = () => (
  <div className='grid-container'>
    <div className="grid">
       <div className="card">
         <h4>Websites</h4> 
         <p><a href="https://internetcomputer.org/" target="_blank" rel="noopener noreferrer">IC</a></p>
         <p><a href="https://association.internetcomputer.org/" target="_blank" rel="noopener noreferrer">ICA</a></p>
         <p><a href="https://smartcontracts.org/" target="_blank" rel="noopener noreferrer">SDK</a></p>
         <p><a href="https://dfinity.org/" target="_blank" rel="noopener noreferrer">Dfinity</a></p>
         {/* <p><a href="https://thereboot.com/" target="_blank" rel="noopener noreferrer">The Reboot</a></p> */}
         <p><a href="https://medium.com/dfinity" target="_blank" rel="noopener noreferrer">Medium</a></p>
         <p><a href="https://wiki.internetcomputer.org/wiki/Internet_Computer_wiki" target="_blank" rel="noopener noreferrer">Wiki</a></p>
       </div>

       <div className="card">
         <h4>Wallets</h4> 
         <p><a href="https://nns.ic0.app/" target="_blank" rel="noopener noreferrer">NNS</a></p>
         <p><a href="https://www.stoicwallet.com/" target="_blank" rel="noopener noreferrer">Stoic</a></p>
         <p><a href="https://plugwallet.ooo/" target="_blank" rel="noopener noreferrer">Plug</a></p>
         <p><a href="https://www.earthwallet.io/" target="_blank" rel="noopener noreferrer">Earth</a></p>
         <p><a href="https://chrome.google.com/webstore/detail/infinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle" target="_blank" rel="noopener noreferrer">Infinity</a></p>
       </div>

       <div className="card">
         <h4>Explorers</h4> 
         {/* <p><a href="https://ic.rocks/" target="_blank" rel="noopener noreferrer">IC Rocks</a></p> */}
         <p><a href="https://www.icpexplorer.org/#/" target="_blank" rel="noopener noreferrer">ICP Explorer</a></p>
         <p><a href="https://dashboard.internetcomputer.org/" target="_blank" rel="noopener noreferrer">Network Status</a></p>
         <p><a href="https://sznps-4aaaa-aaaah-qab2a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Icpscan</a></p>
         <p><a href="https://icscan.io/" target="_blank" rel="noopener noreferrer">Icscan</a></p>
         <p><a href="https://637g5-siaaa-aaaaj-aasja-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">ICHouse</a></p>
       </div>

       <div className="card">
         <Link href="/services"><h4>Services</h4></Link>
         <p><a href="https://faucet.dfinity.org/auth" target="_blank" rel="noopener noreferrer">Cycles Faucet</a></p>
         <p><a href="https://identity.ic0.app/" target="_blank" rel="noopener noreferrer">Internet Identity</a></p>
         <p><a href="https://networknervoussystem.com/" target="_blank" rel="noopener noreferrer">Neuron Calculator</a></p>
         <p><a href="https://icp.guide/" target="_blank" rel="noopener noreferrer">ICP Guide</a></p>
         <p><a href="https://icns.id/" target="_blank" rel="noopener noreferrer">ICNS</a></p>
         <p><a href="https://kinic.io/" target="_blank" rel="noopener noreferrer">Kinic</a></p>
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
         <Link href="/dapps"><h4>Dapps</h4></Link>
         <p><a href="https://dscvr.one/" target="_blank" rel="noopener noreferrer">Dscvr</a></p>
         <p><a href="https://distrikt.app/" target="_blank" rel="noopener noreferrer">Distrikt</a></p>
         <p><a href="https://oc.app/?ref=7vpgo-vaaaa-aaaaf-aah5a-cai" target="_blank" rel="noopener noreferrer">Open Chat</a></p>
         <p><a href="http://icdrive.co/" target="_blank" rel="noopener noreferrer">IC Drive</a></p>
         <p><a href="https://exwqn-uaaaa-aaaaf-qaeaa-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Nuance</a></p>
         <p><a href="https://taggr.top/" target="_blank" rel="noopener noreferrer">TAGGR</a></p>
      </div>

      <div className="card">
         <h4>Podcasts</h4>
         <p><a href="https://sites.libsyn.com/405647" target="_blank" rel="noopener noreferrer">Neurotic</a></p>
         <p><a href="https://ovwc5-5yaaa-aaaae-qaa5a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Podcrypt</a></p>
         <p><a href="https://ic3o3-qiaaa-aaaae-qaaia-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Demergence</a></p>
         <p><a href="https://www.youtube.com/channel/UCHS-QgtP6FXD_DQ_kHkZLKQ" target="_blank" rel="noopener noreferrer">Dfinity Pill</a></p>
         <p><a href="https://www.icp.report/videos" target="_blank" rel="noopener noreferrer">The IC Report</a></p>
         <p><a href="https://www.buzzsprout.com/1790339" target="_blank" rel="noopener noreferrer">The IC Weekly</a></p>
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
         <h4>Newsletter</h4> 
         <p><a href="https://cycledao.xyz/" target="_blank" rel="noopener noreferrer">Cycle_dao</a></p>
         <p><a href="https://www.weekindfinity.com/" target="_blank" rel="noopener noreferrer">Week in Dfinity</a></p>
         <p><a href="https://allthingsinternetcomputer.substack.com/" target="_blank" rel="noopener noreferrer">All Things IC</a></p>
         <p><a href="https://kylelangham.substack.com/" target="_blank" rel="noopener noreferrer">ICP Analysis</a></p>
         <p><a href="https://wnftq-taaaa-aaaaf-qahca-cai.raw.ic0.app/subscription" target="_blank" rel="noopener noreferrer">FastBlocks</a></p>
         <p><a href="https://www.exploringicp.com/" target="_blank" rel="noopener noreferrer">Exploring ICP</a></p>
      </div>

      <div className="card">
         <h4>DeFi</h4> 
         <p><a href="https://icpswap.com/" target="_blank" rel="noopener noreferrer">ICPSwap</a></p>
         <p><a href="https://infinityswap.one/" target="_blank" rel="noopener noreferrer">Infinity Swap</a></p>
         <p><a href="https://sonic.ooo/" target="_blank" rel="noopener noreferrer">Sonic</a></p>
         <p><a href="https://avjzx-pyaaa-aaaaj-aadmq-cai.raw.ic0.app/ICDex" target="_blank" rel="noopener noreferrer">ICDex</a></p>
      </div>

      <div className="card">
         <Link href="/nft"><h4>NFTs</h4></Link>
         <p><a href="https://skeh5-daaaa-aaaai-aar4q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">CCC</a></p>
         <p><a href="https://7pnex-saaaa-aaaai-qbhwa-cai.ic0.app/" target="_blank" rel="noopener noreferrer">CetoSwap</a></p>
         <p><a href="https://toniq.io/" target="_blank" rel="noopener noreferrer">Toniq</a></p>
         <p><a href="https://nntkg-vqaaa-aaaad-qamfa-cai.ic.fleek.co/" target="_blank" rel="noopener noreferrer">NFT Village</a></p>
         <p><a href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">NFTgeek</a></p>
         <p><a href="https://tppkg-ziaaa-aaaal-qatrq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Yumi</a></p>
      </div>

      <div className="card">
         <Link href="/games"><h4>Games</h4></Link>
         <p><a href="https://qwsdo-xaaaa-aaaah-aaa3a-cai.ic0.app/" target="_blank" rel="noopener noreferrer">2048</a></p>
         <p><a href="https://neqb2-dyaaa-aaaad-qameq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">HexGL</a></p>
         {/* <p><a href="https://bgvbu-biaaa-aaaae-aaava-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Netwalk</a></p> */}
         <p><a href="https://ivg37-qiaaa-aaaab-aaaga-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Reversi</a></p>
         <p><a href="https://riseofthemagni.com/" target="_blank" rel="noopener noreferrer">ROTM</a></p>
         <p><a href="https://omro3-5yaaa-aaaad-qalta-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Sudoku</a></p>
         <p><a href="https://o2wyr-ryaaa-aaaah-qad2q-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Tetris</a></p>
      </div>      
    </div>

    <div className="finalgrid">
      <div className="finalcard">
        <Link href="/watchlist">Watchlist</Link>
      </div>
      <div className="finalcard">
        <Link href="/news/2023">News</Link>
      </div>
    </div>
  </div>
);

export default Sites;