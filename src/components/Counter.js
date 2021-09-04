import {
  useState
} from 'react'


export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }
  return ( <
    div className = "container mx-auto mt-10" >
    <button className = "bg-purple-900 text-white rounded-lg hover:bg-purple-500 w-10 h-10 mr-4"
    onClick = {
      decrease
    } > - </button> 
    <button className="bg-purple-900 text-white rounded-lg hover:bg-purple-500 w-10 h-10"
    onClick = {increase}> + </button> 
    
    <h1 className="p-8">{count}</h1> 

    </div>
  )
}
