import './styles/_home.sass';
import { useState} from "react";

const Home = () => {
    // let name= 'Bro';
    const [name, setName] = useState('Bro');
    const [age,setAge] = useState(20);

    const handleClick = () =>{
        setName('Nick')
        setAge(22)
    }

    return(
        <div className= 'Home' >
            <h2 className= 'font-bold'> Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}> Click me</button>
        </div>

    );

}

export default Home;