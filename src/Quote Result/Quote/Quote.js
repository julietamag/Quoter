import './Quote.css'


export function Quote(props){
    return(
        <div id='text' >
            <p>"{props.quote}"</p>
        </div>
    )
}