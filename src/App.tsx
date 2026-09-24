import { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import { themeInitialization } from "./lib/theme";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";

function App() {
  useEffect(() => {
    themeInitialization();
  }, []);
  return (
    <>
      <Topbar />
      <main>
        <Header />
        <Products />
        <Banner />
      </main>
    </>
  );
}

export default App;
