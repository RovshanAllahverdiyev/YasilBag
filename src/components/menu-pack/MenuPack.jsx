import React, { useState, useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'

import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products'
import './menu-pack.css'

function MenuPack() {

    const [ filter, setFilter ] = useState('FAST-FOOD')
    const [products, setProducts ] = useState(fastFoodProducts) 

    useEffect(() => {

        if(filter === 'RICE-MENU') {
            setProducts(riceMenuProducts)
        }

        if(filter === 'FAST-FOOD') {
            setProducts(fastFoodProducts)
        }

        if(filter === 'PIZZA') {
            setProducts(pizzaProducts)
        }

        if(filter === 'DESSERT') {
            setProducts(dessertProducts)
        }

        if(filter === 'COFFEE') {
            setProducts(coffeeProducts)
        }

    },
    [filter])

  return (
    <section>
        <Container>
            <Row>
                <Col className='text-center mb-4' lg='12'>
                    <h3 className='menu__title'>Our Menu Pack</h3>
                    </Col>
                    <Col lg='12' className='text-center mb-5'>
                        <button className={`filter-btn ${filter == 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>

                        <button  className={`filter-btn ${filter == 'RICE-MENU' ? 'active__btn' : ''}`} onClick={() => setFilter('RICE-MENU')}>Rice Menu</button>

                        <button  className={`filter-btn ${filter == 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setFilter('PIZZA')}>Pizza</button>

                        <button  className={`filter-btn ${filter == 'DESSERT' ? 'active__btn' : ''}`} onClick={() => setFilter('DESSERT')}>Dessert</button>
                        
                        <button className={`filter-btn ${filter == 'COFFEE' ? 'active__btn' : ''}`} onClick={() => setFilter('COFFEE')}>Coffee</button>
                    </Col>

                    {
                        products.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                                <ProductCard item={item} />

                            </Col>
                        ))
                    }
            </Row>
        </Container>
    </section>
  )
}

export default MenuPack