import React, { useState, useEffect, useRef } from 'react';
import pizza from '../images/pizza.jpg';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    let priceRef = useRef();
    let options = props.options[0];  // Assuming options is an array and you are accessing the first element
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0]);  // Initialize size with the first option

    // Use effect to handle the initial setting of size value
    useEffect(() => {
        if (priceRef.current) {
            setSize(priceRef.current.value);  // Set initial size based on ref
        }
    }, []);

    // Calculate final price based on the selected size and quantity
    let finalPrice = qty * parseInt(options[size]);

    const handleAddCart = async () => {
        await dispatch({
            type: "ADD",
            id: props._id,
            name: props.name,
            qty: qty,
            size: size,
            price: finalPrice
        });
        console.log(data);
    };

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.imgsrc} className="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className='container w-100'>
                        <div className="d-flex justify-content-between align-items-center">
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)} value={qty}>
                                {Array.from(Array(6), (v, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select
                                className='m-2 h-100 bg-success rounded'
                                ref={priceRef}
                                value={size}  // Control the value of the select
                                onChange={(e) => setSize(e.target.value)}
                            >
                                {priceOptions.map((data) => {
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>{finalPrice}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <button className='btn btn-success mb-2' onClick={handleAddCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}