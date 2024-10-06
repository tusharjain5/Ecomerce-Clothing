import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './prodetails.css';
import ReactImageMagnify from 'react-image-magnify';
import { addToCard } from '../../store/slices/cartslice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';



export const Productdetail = () => {

    const useofparams = useParams()
    const { id } = useParams()
    const disptach = useDispatch()
    const [state, setState] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    })


    useEffect(() => {
        window.scrollTo(0, 10);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setState(res.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id])

    const addToCardData=(item)=>{
        disptach(addToCard(item))
       toast.success('Product Add Sucessfully !');
      }

    return (
        <>
      <Toaster />
            <div className="container" style={{ marginBottom: '5%' , marginTop:'5%'}}>
                <div className="product-detail-card row">
                    <div className="col-md-6 product-detail-image">
                        {/* <img src={state.image} alt={state.title} /> */}
                           
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                // isFluidWidth: true,

                                                src: state.image,
                                                width: 550,
                                                height: 462
                                            },
                                            largeImage: {
                                                src: state.image,
                                                width: 800,
                                                height: 1100
                                            }
                                        }} />
                                        
                    </div>
                    <div className="col-md-6 product-detail-info">
                        <h2 className="product-title">{state.title}</h2>
                        <p className="product-category">{state.category}</p>
                        <p className="product-description">{state.description}</p>
                        <p className="product-price">${state.price}</p>
                        <button className="add-to-cart-btn"
                        onClick={()=>{addToCardData(state)}}
                        >Add to Cart</button>
                        &nbsp; &nbsp;
                        <Link to="/login">
                         <button className='add-to-cart-btn1'>Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}
