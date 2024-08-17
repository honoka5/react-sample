import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>皆さんこんにちは</h1>
    {/*<div>count:{count}</div> ここをコメントアウトしなければcount二個になる*/}
      <CountPreview hoge={count}/>

      <button onClick={function(){
        setCount(count+1)
        console.log(count)
      }}>+</button>
      <h2 color='Red'>増えていくの？</h2>

      <button onClick={function(){
        if(count===0){
          return
        }
        setCount(count-1)
        console.log(count)
      }}>-</button>
      <h2 color='blue'>減っていくかも</h2>
    </>
  )
}
const CountPreview =function({hoge}:{hoge:number}){
  return <div>count:{hoge}</div>
}
export default App
