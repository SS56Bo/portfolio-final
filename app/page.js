import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Projects />
      <Resume />
    </>
  );
}

export default Home;
