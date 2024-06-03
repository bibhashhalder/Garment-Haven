import Admin from "../components/home/Admin";
import ContactUs from "../components/home/ContactUs";
import Hero from "../components/home/Hero";
import LocationMap from "../components/home/LocationMap";
import Products from "../components/home/Products";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Products/>
            <Admin/>
            <LocationMap/>
            <ContactUs/>
        </div>
    );
};

export default Home;