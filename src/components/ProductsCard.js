import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

import './../App.css';
import {Carousel, CarouselItem, Container, Card} from "react-bootstrap";
import Cardd from "./Cardd";
import { ColorRing } from "react-loader-spinner";



const ProductsCard = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios("https://fakestoreapi.com/products")
            .then(({data}) => setProducts(data))
            .catch((err) => console.log(err))
            .then(
                (result) => {
                  setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                  }
                )
    }, [])

    console.log(products);



    if (error) {

        return <div>Ошибка: {error.message}</div>;

      } else if (!isLoaded) {

        return <div className="load">
                             <ColorRing
                                 visible={true}
                                 height="80"
                                 width="80"
                                 ariaLabel="blocks-loading"
                                 wrapperStyle={{}}
                                 wrapperClass="blocks-wrapper"
                                 colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
                             />
                </div>;

      } else {

                return (
                    <Container className="img bg-dark" >
                        <Carousel >
                            
                                {
                                    products.map((item) => (
                                        
                                        <CarouselItem className="item" >
                                            
                                            <img onClick={() => navigate(`/products/${item.id}`)} 
                                                src={item.image} 
                                                alt=''
                                                className="d-block w-100"
                                            />
                                            <Carousel.Caption>
                                                <Card.Title className='title'>{item.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted price">{item.price}$</Card.Subtitle>
                                            </Carousel.Caption>
                                        </CarouselItem>
                                    ))
                                }
                            
                        </Carousel>

                        <div style={{marginTop: "5rem", marginLeft: '45%'}} className="pagination">
                            
                            <Link className="page-link"  aria-label="Предыдущая">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                            
                            <Link className="page-link navlist" to="#">1</Link>
                            <Link className="page-link navlist" to="#">2</Link>
                            <Link className="page-link navlist" to="#">3</Link>
                            
                            <Link className="page-link" to="#" aria-label="Следующая">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                              
                        </div>
                    
                    <Cardd/>

                    </Container>
                );
    }
};

export default ProductsCard;