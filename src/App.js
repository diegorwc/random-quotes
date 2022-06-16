import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { next } from './features/quotes/quotesSlice';
import React from 'react';

function QuoteBox() {    
  const current_quote = useSelector((state) => state.quote.value)
  const current_quote_author =  useSelector(state => state.quote.author)
  const tweet_url = useSelector(state => state.quote.tweet_url);
  const tweet_msg = `${tweet_url}"${current_quote}" -${current_quote_author}`;
  const dispatch = useDispatch()    
    return(      
      <div id="quote-box" className="container">        
        <div className="row">
          <div className="col-sm-2"></div>
          <div id="text" className="col-sm-8 card">{current_quote}</div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-4" id="author"><em>{current_quote_author}</em></div>
          <div></div>
        </div>                
        <button id="new-quote" className="btn btn-success" onClick={() => dispatch(next())}>New quote</button>
        <a id="tweet-quote" className="btn btn-primary" href={tweet_msg} target="_blank">Tweet quote</a>        
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <QuoteBox/>
    </div>
  );
}

export default App;
