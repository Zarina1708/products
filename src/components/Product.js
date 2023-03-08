import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import Card from 'react-bootstrap/Card';




const Product = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate()

    const [product, setProduct] = useState({})

    const {id} = useParams()

    

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => console.log('Ошибка при получении продукта'))
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


    // if (JSON.stringify(product) === '{}') {
    //     return (
    //         <h2>Продукт не найден</h2>
    //     )
    // };

    if (error) {

        return <div>Ошибка: {error.message}</div>;

      } else if (!isLoaded) {

            return <div className="load">
                        <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="MagnifyingGlass-loading"
                            wrapperStyle={{}}
                            wrapperClass="MagnifyingGlass-wrapper"
                            glassColor = '#c0efff'
                            color = '#e15b64'
                        />
                    </div>;

      } else {
                return (
                    <Card className="text-center" style={{ width: '34rem', marginTop: '7%', marginLeft: '30%', marginBottom: '10%', padding: '35px' }}>
                        <div className="product__btns" >
                            <div className="product__card-left">
                                <Card.Img variant="top" src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt=""/>
                            </div>
                            <Card.Body>
                                <Card.Title className='title'>{product.title}</Card.Title>
                                <Card.Text className='desc'>{product.description}</Card.Text>
                                <Card.Subtitle className="mb-2 text-muted price">{product.price}$</Card.Subtitle>
                                <Card.Link style={{color: 'CaptionText', font: '1em "Fira Sans", sans-serif' }}>{product.category}</Card.Link>
                            </Card.Body>
                        </div>
                    </Card>
                );
            }
};

export default Product;