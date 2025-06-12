import Navbar from "../components/Header";
import Banner from "../components/Banner";
import Missions from "../components/Missions";

import '../style/index.scss';

function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <Missions />
        </>
    )
}
export default Home