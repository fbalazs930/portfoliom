import Head from 'next/head'
import { ParticlesBg } from "./ParticlesBg"
import { Nav } from './Home/Nav'
import { HomePage } from './Home/HomePage'
import { Icons } from './Home/Icons'
import { Projects } from './Projects/Projects'
import { CV } from './CV/CV'
import { About } from './About/About'
import { Contact } from './Contact/Contact'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Farkas Balázs</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="https://i.postimg.cc/g0NZ5nqV/VP-logos-white.png" /> */}
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <div className="bg2"></div>
      <ParticlesBg />
      <Nav />
      <HomePage />
      <Icons />
      <Projects />
      <CV />
      <About />
      <Contact />
    </div>
  )
}
