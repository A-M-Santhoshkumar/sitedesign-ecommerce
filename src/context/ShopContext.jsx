import { useEffect, useState } from "react";
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();


export const ShopContextProvider = (props) => {
    
     const currency ='₹';
     const deliveryFee = 30;
 
      const [search, setSearch] = useState('');
      const [showSearch, setShowSearch] = useState(false);

      const [cartItems,setCartItems] = useState({})
      const  navigate = useNavigate();

      const addToCart = async (itemId,size) => {
       
         if(!size){
          toast.error('Select Product size');
          return;
         }

        let cartData = structuredClone (cartItems)

        if(cartData[itemId]){
          if(cartData [itemId] [size]){
            cartData [itemId] [size] += 1;
          } else{
            cartData [itemId] [size] = 1;
          }
        }
        else{
          cartData[itemId] = {};
          cartData [itemId] [size] = 1;
        }
        setCartItems(cartData)
      }
       
      const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
          for(const item in cartItems[items]){
            try{
              if(cartItems[items][item] > 0){
                totalCount += cartItems[items] [item]
              }
            }catch(error){

            }
          }
        }
        return totalCount;
      }

   
            useEffect(()=> {
             console.log(cartItems)
            },[cartItems])


     
            const updateQuantity = async (itemId,size,quantity) => {
              let cartData = structuredClone(cartItems);

              cartData[itemId] [size] = quantity;
              setCartItems(cartData);
            }

          
          const getCartAmout =  () => {
            let totelAmount = 0;
            for(const items in cartItems){
              let itemInfo = products.find((product) => product._id === items);
              for(const item  in cartItems[items]){
             try{
                 if(cartItems[items][item] > 0){
                  totelAmount += itemInfo.price * cartItems[items] [item];
                 }
             }catch(e){

             }
              }
            }
            return totelAmount;
          }

    const value = {
      products,
      currency, 
      deliveryFee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,addToCart,
      getCartCount,
      updateQuantity,
      getCartAmout,
      navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}





