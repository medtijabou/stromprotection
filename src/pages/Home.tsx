import Navbar from "../components/Header";
import Banner from "../components/Banner";
import Missions from "../components/Missions";
import About from "../components/About";
import Contact from "../components/Contact";
import { Coordinates } from "../components/Coordinates";
import Footer from "../components/Footer";
import '../style/index.scss';

function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <Missions />
        <About />
        <Contact />
        <Coordinates />
        <Footer />
        </>
    )
}
export default Home