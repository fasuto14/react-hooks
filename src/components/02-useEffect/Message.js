import React,{useEffect, useState} from 'react'

export const Message = () => {

    const [cords,setCoords] = useState({x:0,y:0})
    const {x,y} = cords;
    
    useEffect(() => {
        const mouseMove = (e)=> {
            const cords = {x:e.x,y:e.y}
            setCoords(cords)
        }

        window.addEventListener('mousemove',mouseMove)
    
      return () => {
        console.log('Componente desmontado')
      }
    }, [])
    
  return (
    <div>
        <h3>Eres genial!!</h3>
        <p>
            X:{x} Y:{y}
        </p>
    </div>
  )
}
