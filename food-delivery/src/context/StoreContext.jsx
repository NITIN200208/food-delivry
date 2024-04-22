import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assert/assets'

export const StoreContext =createContext(null)
const StoreContextProvider=(props)=>{

  const[cartItems,setcartItem]=useState({})

  const addToCart=(itemId)=>{
    if(!cartItems[itemId])
    {
      setcartItem((prev)=>({...prev,[itemId]:1}))
    }
    else
    {
      setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

    const removefromCart=(itemId)=>
    {
      setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems)
      {

        if(cartItems[item]>0)
        {

        let itemInfo=food_list.find((product)=>product._id===item);
        totalAmount +=itemInfo.price*cartItems[item];
        }
      }
      return totalAmount
    }

    const contextvalue={
        food_list,
        cartItems,
        setcartItem,
        addToCart,
        removefromCart,
        getTotalCartAmount
    }
  return (
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider



