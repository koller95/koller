import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TemporaryDrawer from "./components/Drawer";

function App() {
    return (
        <div className="container-fluid">
            <header className="full-screen">
                <NavBar />
                <Hero />
            </header>
            <main>
                <AboutMe />
                <section>
                    <h2>rate me</h2>
                    <div>text</div>
                    <div>JS</div>
                    <div>CSS</div>
                    <div>react</div>
                    <div>html</div>
                    <div>bootstrap</div>
                    <div>node</div>
                    <TemporaryDrawer />
                </section>
                <section>
                    <h2>reference</h2>
                    <div>type something</div>
                </section>
                <section>
                    <h2>contact us</h2>
                    <form action="">
                        <input type="text" placeholder="What's your name" />
                    </form>
                </section>
            </main>
            <footer className="container"></footer>
        </div>
    );
}

export default App;
