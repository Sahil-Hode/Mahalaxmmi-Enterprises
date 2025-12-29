// src/app/page.js
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Member from '../components/member';
import Services from '../components/services';
import About from '../components/about';
import Process from '../components/process';
import Partners from '../components/partners';
import Banks from '../components/banks'; 
import Map from '../components/map';
import ContactForm from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Member />
      <About />
      <Services />
      <Process />
      <Partners />
      <Banks />
      <Map />
      <ContactForm />
      <Footer />
    </main>
  );
}