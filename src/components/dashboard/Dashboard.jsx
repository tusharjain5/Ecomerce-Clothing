import React, { useEffect, useState } from 'react'
import { HomeSlider } from './HomeSlider'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './list.css';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { addToCard } from '../../store/slices/cartslice';

export const Dashboard = () => {

  const [state, setState] = useState([])
  const [category, setCategory] = useState([])
  const [searchParams] = useSearchParams()
  const query = searchParams.get('categoryname')
  const useofnav=useNavigate()
   const dispatch=useDispatch()

  const getallcatgories = () => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data)
      })
  }

  const getallproducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setState(res.data)
      })

  }

  const getdatabycategoryname = (categoryname) => {
    // axios.get("https://fakestoreapi.com/products/categories/" + categoryname)
    axios.get(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => {
        setState(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {

    // getallproducts()
    // getallcatgories()

    if (query != null) {
      getallproducts()
      getallcatgories()
      getdatabycategoryname(query)
    }
    else {
      getallproducts()
      getallcatgories()
    }
  }, [query])


   const gotoproductdetails=(id)=>{
      useofnav(`/product-detail/${id}`)
   }

   const addtocarddata=(item)=>{
        
    dispatch(addToCard(item))
    toast.success('Product Added Successfully')

   }




  return (
    <>
     <Toaster />
      <HomeSlider />

      <br />
      <div className="container-fluid" style={{ marginTop: '5%' }}>
        <div className="row">
          <div className="col-md-2">
            {/* <div className="list-group">
              <ul class="list-group" style={{ paddingTop: "10%" }}>
                <li class="list-group-item active" aria-current="true">Categories</li>
                {
                  category.map((item, index) =>
                    <li key={index} class="list-group-item" style={{ textTransform: "capitalize" }}>
                      <a href="javascript:void(0);" onClick={() => { getdatabycategoryname(item) }} style={{ textDecoration: "none" }}>{item}</a>
                    </li>
                  )
                }
              </ul>
            </div> */}

            <div className="list-group">
              <h5 className="list-group-item active">Categories</h5>
              {category.map((item, index) => (
                <a
                  key={index}
                  className="list-group-item list-group-item-action"
                  href="#"
                  onClick={() => { getdatabycategoryname(item) }}
                  style={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  {item}
                </a>
              ))}
            </div>







          </div>
          <div className="col-md-10">
            <div className="container">
              <div className="row">

              {/* <h1 className='text-center'> Categories</h1> */}

                {
                  state.map((item, index) =>

                    <div className="col-md-3" style={{ marginBottom: '5%' }}>
                      {/* <div className="card" style={{ width: "18rem" }}>
                        <img src={item.image} className="card-img-top" alt="..." style={{height:'200px',width:'100%'}} />
                        <div className="card-body">
                          <h5 className="card-title">{item.title.substring(0,20)}</h5>
                          <p className="card-text">
                           {item.description.substring(0,60)}
                          </p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item" style={{textTransform:'capitalize'}}>{item.category}</li>
                          <li className="list-group-item">Price</li>
                          <li className="list-group-item">{item.price} $</li>
                        </ul>
                        <div className="card-body">
                          <a href="#" className="card-link">
                           Add to Cart
                          </a>
                          <a href="#" className="card-link">
                            View
                          </a>
                        </div>
                      </div> */}

                      {/* <Card sx={{ maxWidth: 300 ,  margin: "0 auto",
                                                padding: "0.1em",}}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="200"
                          image={item.image}
                          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                           {item.title.substring(0,20)}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' , fontFamily:'Times New Roman' }}>
                          {item.description.substring(0,60)}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" className='btn btn-success'>Add to Cart</Button>
                          <Button size="small" className='btn btn-success' style={{marginLeft:'30%'}}>View</Button>
                        </CardActions>
                      </Card>
 */}

                      <Card
                        sx={{
                          maxWidth: 300,
                          margin: "0 auto",
                          padding: "0.1em",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={item.title}
                          height="200"
                          image={item.image}
                          sx={{
                            padding: "1em 1em 0 1em",
                            objectFit: "contain",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {item.title.substring(0, 20)}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", fontFamily: "Times New Roman" }}
                          >
                            {item.description.substring(0, 60)}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "green",
                              fontWeight: "bold",
                              marginTop: "0.5em",
                              fontFamily: "Arial",
                            }}
                          >
                            Price: ${item.price}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.primary",
                              marginTop: "0.2em",
                              fontStyle: "italic",
                              fontFamily: "Georgia",
                            }}
                          >
                            Category: {item.category}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" className="btn btn-success" sx={{ transition: "background-color 0.3s", "&:hover": { backgroundColor: "#45a049" } }}
                          onClick={()=>addtocarddata(item)}
                          >
                            Add Cart
                          </Button>
                          <Button
                            size="small"
                            className="btn btn-success"
                            style={{ marginLeft: "30%" }}
                            sx={{ transition: "background-color 0.3s", "&:hover": { backgroundColor: "#45a049" } }}
                            onClick={()=>gotoproductdetails(item.id)}
                          >
                            View
                          </Button>
                        </CardActions>
                      </Card>














                    </div>
                  )
                }

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
