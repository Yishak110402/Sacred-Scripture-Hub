import Hero from "../components/Homepage/Hero";
import Benefits from "../components/Homepage/Benefits"
import About from "../components/Homepage/About";
import Testimonials from "../components/Homepage/Testimonials";
import NewspaperSubscription from "../components/Homepage/NewspaperSubscription";
import ContactOptions from "../components/Homepage/ContactOptions";

export default function Homepage(){
    return(
        <>
        <Hero/>
        <Benefits/>
        <About/>
        <Testimonials/>
        <NewspaperSubscription/>
        <ContactOptions/>
        </>
    )
}