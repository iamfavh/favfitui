"use client";
import Pane from "@/components/layout/Pane";
import { useEffect, useState } from "react";

export default function Home() {
    
    return (
        <Pane className="flex-col items-center gap-10 px-10">
            <Header/>
            <FunFact/> 
            
            <a href="https://www.today.com/life/inspiration/interesting-facts-rcna130243" 
            className="px-10 text-lg underline decoration-foreground">
                source
            </a>
            <SurpriseButton/>
        </Pane>
    );
};

function SurpriseButton() {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleReload = (): void => {
        window.location.reload();
    }

    return (
        <div>
            {isVisible ? 
                <div className="flex flex-col items-center justify-center gap-10">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGt1dnN3eXcwcWR4M3VkYXRndmVjM2dtcGo3M2FsZ3VvaTZ3NzY0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KzGCAlMiK6hQQ/giphy.gif"/>
                    <button onClick={handleReload} className="px-4 bg-surface border border-foreground rounded">
                    refresh
                </button>
                </div>
                : 
                <button onClick={toggleVisibility} className="px-4 bg-surface border border-foreground rounded">
                    surprise?
                </button>
            }
        </div>
        
    );
}

function Header() {
    return (
        <div className="flex w-full flex-col justify-center items-center">
            <Title/>
        </div>
    );
};

function Title() {
    return (
        <div className="flex w-full font-extrabold text-center items-center justify-center text-6xl">
            IAMFAVH
        </div>
    );
};
 
function FunFact() {

    const [randomFact,setRandomFact] = useState("");

    const facts: string[] = [
        "Antarctica is the largest desert on Earth because deserts are defined by low yearly rainfall rather than heat.",
        "Leftover pasta contains more resistant starch than fresh pasta, which helps improve blood sugar control and gut health.",
        "Wombats produce distinct cube-shaped poop to prevent the droppings from rolling away from marking spots.",
        "Lemons float in water, but limes sink.",
        "The human circulatory system is more than 60,000 miles long."
    ];

    useEffect(() => {
            const min = 1;
            const max = facts.length-1;
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
            setRandomFact(`${facts[randomNum]}`);
        }
    );

    return (
        <div className="flex flex-col w-full text-center justify-center items-center text-wrap text-2xl gap-10">
            <div className="text-4xl">
                Did you know?
            </div>
            <div>
                {randomFact}
            </div>
            
        </div>
    );

    
    
}