

const MyEventComp = () => { //we use const so as to not a create a duplicate component like it and also we don't wanna change it's value at runtime.

    const greet = () => {
        window.alert("Good Morning Friends");
    }

    const welcome = (comp,...emp) => {
        window.alert(`Welcome you ${emp} in ${comp}`);
    }

    return(<div>
        <h2>This is my Event component</h2>
        <button type="button" onClick={()=>greet()}>Call Greet Method</button>
        <h2 onMouseOver={()=>welcome("Opteamix","Pooja")}>Hover on me, A pop-up will appear</h2>
        </div>)
        
}



export default MyEventComp;