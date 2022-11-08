import './App.css';
import React, {useEffect, useState} from 'react';
import { Quote } from '../Quote Result/Quote/Quote';
import {Author} from '../Quote Result/Author/Author';
import {Buttons} from '../Buttons/Buttons'


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [hex, setHex] = useState('#ffffff');

  let currentQuote, currentAuthor = '';
  const handleColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor)
  }

  //initialize app to a random quote
  useEffect(()=>{
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(json =>{ 
      setQuote(json.content);
      setAuthor(json.author);
      })
  },[])

  //get the quote data from api
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(json =>{ 
      currentQuote = json.content;
      currentAuthor = json.author;
      })

  //change the quote on every click
  const handleChange = () =>{
    setQuote(currentQuote);
    setAuthor(currentAuthor);
  }
  
  useEffect(() =>{
    handleColor()
  }, [quote])

  return (
    <div className="App" style={{backgroundColor: `${hex}`}}>
        <div id='quote-box' >
            <Quote quote={quote} />
            <Author author={author} />
            <Buttons 
            handleChange={handleChange}
            hex={hex}
            quote={quote}
            author={author}
             />
        </div>
    </div>
  );
}

export default App;
