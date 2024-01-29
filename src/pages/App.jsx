import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Services } from './Services';
import { Contact } from './Contact';

export function App() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
    
    return (
    <div ref={scrollRef}>
        <Home />
        <AboutMe />
        <Services />
        <Contact />
    </div>
    )
}