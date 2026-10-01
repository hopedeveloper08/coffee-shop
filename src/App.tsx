import { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import { themeInitialization } from "./lib/theme";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";
import Club from "./components/Club/Club";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    themeInitialization();
  }, []);
  return (
    <>
      <Topbar />
      <Toaster />
      <main>
        <Header />
        <Products />
        <Banner />
        <Categories />
        <ProductsSlider />
        <Club />
        <Blog />
        <Contact />
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default App;
