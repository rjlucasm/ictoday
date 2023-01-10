import Head from 'next/head'
import Link from 'next/link'
import Footer from '/components/footer'

export default function Archives() {
    return (
    <div className="container">
        <Head>
        <title>Internet Computer News Archives</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Internet Computer News Archives</h2>

            <>&#128240;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link>

            <>&nbsp;<Link href="/news/2021"><a style={{ color: 'inherit' }}>2021</a></Link></>
            <>&nbsp;<Link href="/news/2022"><a style={{ color: 'inherit' }}>2022</a></Link></>
        </main>

        <Footer/>
        
    </div>
    )
}