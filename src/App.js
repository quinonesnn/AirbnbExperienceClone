import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import firstImg from "./images/katie-zaferes.png"

export default function App(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img={firstImg}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}