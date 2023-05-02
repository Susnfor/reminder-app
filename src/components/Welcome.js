import Typewriter from "typewriter-effect";

function Welcome(props) {

    return (
        <div className="App-top">
        <header className="App-header">
        <Typewriter
                
                onInit={(typewriter)=> {

                typewriter
                
                .typeString(`Welcome ${props.name}`)
                
                .pauseFor(1000)
                
                .start();
                }}
                />
        
        {/* <span style={{outlineColor: "black", fontWeight: "bold"}}> {props.name}</span> */}
        
        
        </header>
        <p>
        If you're relying on your motivation to keep you focused, 
        you're going to be in a perpetual state of lateness and last-minute-ness 
        because there's never enough motivation to go around
            </p>
        </div>
    );
}

export default Welcome;
