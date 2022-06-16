import { createSlice } from '@reduxjs/toolkit'

const quotesList = [
    {quote: "Antes tarde do que mais tarde", author: "Desconhecido"},
    {quote: "É o que", author: "Yoda"},
    {quote: "O melhor presente Deus me deu, a vida me ensinou a lutar pelo que é meu", author: "Chorão"},
    {quote: "Even if you are not ready for the day, it cannot always be night", author: "Donda"}
]

export const quoteSlice = createSlice({    
    name: 'quote',
    initialState: {
        index: 0,                
        value: quotesList[0].quote,
        author: quotesList[0].author,
        tweet_url: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='                       
    },    
    reducers: {
        next: state => {
            state.index < quotesList.length - 1 ? state.index += 1 : state.index = 0            
            state.value = quotesList[state.index].quote;
            state.author = quotesList[state.index].author;
        }                
    }  
})

export const { next } = quoteSlice.actions
export default quoteSlice.reducer