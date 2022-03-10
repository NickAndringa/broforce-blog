import './styles/_home.sass';

const Home = () => {

    const handleClick = (e) =>{
        console.log('hello,bros',e)
    }
    const handleClickAgain = (name,e) => {
        console.log('hello' + name, e.target)

    }
    return(
        <div className= 'Home' >
            <h2 className= 'font-bold'> Homepage</h2>
            <button onClick={handleClick}> Click me</button>
            <button onClick={(e)=> handleClickAgain('Nick',e)} > Click me again</button>
        </div>

    );

}

export default Home;