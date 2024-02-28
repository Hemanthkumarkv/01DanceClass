import React from 'react'
import {useSelector} from "react-redux"
const Header = () =>
 {


  //useSelector is read the store or axis the store
    // subCribing to the strore using  Selector

    

    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems);


  return (
    <div>
      <h1>cart -({cartItems.length} items)</h1>
    </div>
  )
}

export default Header
