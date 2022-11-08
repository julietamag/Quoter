import './ReQuoteBtn.css'
export function ReQuoteBtn(props){
    return(
        <div id='new-quote' >
            <button 
            className='newQuoteBtn' 
            style={{backgroundColor: `${props.hex}`}} 
            onClick={props.handleChange} >New Quote</button>
        </div>
    )
}