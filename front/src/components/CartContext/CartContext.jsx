
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // valor actual (count) y función que permite actualizar el valor (setCount), inicializado en 0
  const [count, setCount] = useState(0);
  //valor actual y setCartItems para actualizar su valor, inicia en un array vacío 
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    // contador para sumar la cantidad de productos que se agregan al carrito
    setCount(count + 1);
    // funcion para agregar un producto al carrito de compras
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    
    // se recorre el array y se elimina el id que coincide con el id del producto
    const index = cartItems.findIndex(item => item.id === product.id);
    //si el index que se encontro es diferente a -1, se resta un producto del carrito
    if (index !== -1) {
      setCount(count - 1);
      // recorre el array y devuelve un nuevo array con los productos que no coinciden con el index
      setCartItems(cartItems.filter((_, i) => i !== index));
    }
  };

  return (
    <CartContext.Provider value={{ count, setCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;

