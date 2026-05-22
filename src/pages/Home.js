import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import WhyChooseSection from "../components/about/WhyChoose";
import Schedule from "../components/schedule/Schedule";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Schedule />
            <WhyChooseSection />
        </>
    )
};

export default Home;