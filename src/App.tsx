import { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import { themeInitialization } from "./lib/theme";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";

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
        <Categories />
      </main>
    </>
  );
}

export default App;
