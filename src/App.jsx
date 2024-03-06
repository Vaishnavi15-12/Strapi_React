import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { useGlobalContext } from "./context";

const App = () => {
  
  return (<main>
    <Navbar/>
    <Hero/>
    <Sidebar/>
    <Submenu/>
  </main>)
};
export default App;
