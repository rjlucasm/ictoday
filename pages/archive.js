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

            <Link href="/">Home</Link>

            <>&nbsp;<Link href="/news/2021">2021</Link></>
            <>&nbsp;<Link href="/news/2022">2022</Link></>
        </main>

        <Footer/>
        
    </div>
    )
}