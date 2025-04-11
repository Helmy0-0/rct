import './hw.css'
export default function HelloWorld(){
    const props = {
        text: "Hello World",
    }
    return (
        <div>
            <Header {...props}/>
            <Paragraph/>
        </div>
    )
}

function Header({text = "kurang text"}){
    return(
        <h1 style={{
            color: "red",
            backgroundColor: "aqua",
        }}>{text.toUpperCase()}</h1>
    )
}

function Paragraph(){
    const text = "This is a simple React component."
    const style = {
        color: "blue",
        backgroundColor:"Yellow"
    };
    return(
        <p style={style}>{text.toLowerCase()}</p>
    )
}