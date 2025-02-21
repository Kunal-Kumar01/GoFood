import React from 'react'; // Correct the import statement
import { createContext, useReducer, useContext } from 'react'; // Combine imports for cleanliness

const CartStateContext = createContext(); // Corrected from creatContext to createContext
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) { // Corrected from 'actions' to 'action' and added '.type'
        // Add cases as needed
        case "ADD":
            return [...state, {id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price}];
        
        default:
            console.log("Error in Reducer");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []); // Initial state can be an empty array or whatever initial state you need
    return (
        <>
            <CartDispatchContext.Provider value={dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </CartDispatchContext.Provider>
        </>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
