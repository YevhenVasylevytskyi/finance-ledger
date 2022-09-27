import Container from '../../components/Container'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Cases from '../../components/Cases'
import Blog from '../../components/Blog'
import Team from '../../components/Team'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

import images from '../../assets/images/cases/casesImagesArr';

import styles from './Home.module.css';

const headerLinks = [
  { url: 'home', title: 'Home' },
  { url: 'about', title: 'About' },
  { url: 'cases', title: 'Cases' },
  { url: 'blog', title: 'Blog' },
  { url: 'contact', title: 'Contact' },
]

function Home() {
  return (
    <Container>
      <Header headerLinks={headerLinks}/>
      <Hero /> 
      <About />
      <Cases images={images} />
		  <Blog />
		  <Team />
		  <Contact />
		  <Footer />
      

    </Container>
    
  );
}

export default Home;