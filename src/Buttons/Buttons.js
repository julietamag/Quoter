import { ReQuoteBtn } from '../Buttons/ReQuoteBtn/ReQuoteBtn';
import { ShareBtn } from '../Buttons/ShareBtn/ShareBtn';
import './Buttons.css'

export function Buttons(props){
    return(
        <div id='buttons-box' >
            <ShareBtn 
            quote={props.quote}
            author={props.author}
            hex={props.hex}
            />
            <ReQuoteBtn 
            handleChange={props.handleChange} 
            hex={props.hex}
             />
        </div>
    )
}