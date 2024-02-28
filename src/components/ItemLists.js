import React from 'react'
import {useDispach} from "react-redux"
import {addItem} from "../utils/cartSlice"

const ItemLists = ({items, dummy}) => 
{
    const dispach = useDispach()

    let handleAddItem =(items)=>{

        //Dispatch an action

        dispach(addItem(items))

    }

  return (
    <div>
        {items.map((item)=>(
            <div key={item.card.id}>
                
      <button onClick={(handleAddItem(item))}>Add+</button>
            </div>
           
        ))}
    </div>
  )
}

export default ItemLists
