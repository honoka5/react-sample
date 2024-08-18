import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      {/*<div>count:{count}</div> ここをコメントアウトしなければcount二個になる*/}
      <CountPreview hoge={count}/>
      <h1 id='lo'>ここの下のカウントが変わっていく...</h1>
      <div id='jo'>
      <div id='tarako'>
        <button onClick={function(){
          setCount(count+1)
          console.log(count)
        }}>+</button>
        <h2 id='me'>増えていくの？</h2>
      </div>

      <div id='goma'>
        <button onClick={function(){
          if(count===0){
            return
          }
          setCount(count-1)
          console.log(count)
        }}>-</button>
        <h2>減っていくかも</h2>
      </div>
      </div>
    </div>
  )
}
const CountPreview =function({hoge}:{hoge:number}){
  return <div id='jozi'>count:{hoge}</div>
}
export default App
