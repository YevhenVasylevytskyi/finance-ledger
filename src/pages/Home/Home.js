import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Cases from '../../components/Cases'
import Blog from '../../components/Blog'
import Team from '../../components/Team'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

import styles from './Home.module.css';


function Home() {
  return (
    <>
        <Header />
        <Hero /> 
        <About />
		<Cases />
		<Blog />
		<Team />
		<Contact />
		<Footer />  
    </>
  );
}

export default Home;