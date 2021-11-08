import React from 'react'
import { Duck } from './demo'

interface Props{
	duck:Duck;
}

export default function DuckItem({duck}:Props) {
	return (
<div key={duck.name}>
            <p>{duck.name}</p>
            <p>{duck.numLegs}</p>
            <button onClick={()=>{duck.makeSound("wow~~")}}>Click me to quack</button>
          </div>
	)
}
