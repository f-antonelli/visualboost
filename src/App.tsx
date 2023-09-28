import Balls from "./components/Balls/Balls";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Balls />
        <Services />
      </main>
    </>
  );
};

export default App;
