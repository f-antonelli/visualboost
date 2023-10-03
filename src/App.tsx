import Balls from "./components/Balls/Balls";
import Copyright from "./components/Copyright/Copyright";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Balls />
        <Services />
        <History />
        <Form />
      </main>
      <Copyright />
    </>
  );
};

export default App;
