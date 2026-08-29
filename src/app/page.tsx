import Pane from "@/components/layout/Pane";

export default function Home() {

    return (
        <Pane className="flex-col">
            <Header/>            
        </Pane>
    );
};

function Header() {
    return (
        <div className="flex flex-col justify-center items-center text-5xl">
            <Title/>
        </div>
    );
};

function Title() {
    return (
        <div className="flex text-center text-9xl">
            Hello, <br/>
            iamfavh.
        </div>
    );
};