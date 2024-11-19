// Code Keypad Component Here

function Keypad (){
    
    function handleChange(event) {
        console.log('Entering password...') 
    }
    
    return (
        <form>
            <input type="password" placeholder="test" onChange={handleChange} />
        </form>
    )
}

export default Keypad;