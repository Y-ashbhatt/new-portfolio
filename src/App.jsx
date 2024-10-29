import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
