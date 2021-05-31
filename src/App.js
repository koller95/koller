import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import RateMe from "./components/RateMe";
import Hero from "./components/Hero";
import Reference from "./components/Reference";
import ContactMe from "./components/ContactMe";
import Proyects from "./components/Proyects";

function App() {
    return (
        <div className="container-fluid">
            <header className="full-screen">
                <NavBar />
                <Hero />
            </header>
            <main>
                <AboutMe />
                <Proyects />
                <Reference />
                <ContactMe />
                <RateMe />
            </main>
            <footer className="container"></footer>
        </div>
    );
}

export default App;
