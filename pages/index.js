import Head from 'next/head'
import Hero from './../components/hero'
import Cards from './../components/cards'
import Contributors from './../components/contributors'
import Steps from './../components/steps'

export default function Home() {
  return (
    <div>
    <Head>
    <title>StudyMint - One Stop Library</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Hero />
      <Cards />
      <Steps />
      <Contributors />
    </div>
  )
}
