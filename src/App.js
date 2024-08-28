import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div  className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
