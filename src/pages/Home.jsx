import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";
import Services from "./homepage/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects /> 
            <Contact />      
        </>

    );
}

export default Home;