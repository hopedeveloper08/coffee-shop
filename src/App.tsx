import { useEffect } from "react";
import Topbar from "./components/Topbar/Topbar";
import { themeInitialization } from "./lib/theme";
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    themeInitialization();
  }, []);
  return (
    <>
      <Topbar />
      <main>
        <Header />
      </main>
    </>
  );
}

export default App;
