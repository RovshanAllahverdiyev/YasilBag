import React, { useState, useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'

import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts,kabablar, soyuqQelyanaltilar, baliqlar, spirtsizIckiler, araqlar, piveler, piveQelyanaltilari, caylar, xengeller, gurcuMetbexi, qazanYemekleri, istiYemekler } from '../../assets/fake-data/products'
import './menu-pack.css'

function MenuPack() {

    const [ filter, setFilter ] = useState('XENGELLER')
    const [products, setProducts ] = useState(xengeller) 

    useEffect(() => {

        if(filter === 'XENGELLER') {
            setProducts(xengeller)
        }

        if(filter === 'GURCUMETBEXI') {
            setProducts(gurcuMetbexi)
        }

        if(filter === 'QAZANYEMEKLERI') {
            setProducts(qazanYemekleri)
        }

        if(filter === 'ISTIYEMEKLER') {
            setProducts(istiYemekler)
        }

        if(filter === 'BALIQLAR') {
            setProducts(baliqlar)
        }


        if(filter === 'KABABLAR') {
            setProducts(kabablar)
        }

        if(filter === 'SOYUQQELYANALTILAR') {
            setProducts(soyuqQelyanaltilar)
        }

        if(filter === 'SPIRTSIZICKILER') {
            setProducts(spirtsizIckiler)
        }

        if(filter === 'ARAQLAR') {
            setProducts(araqlar)
        }

        if(filter === 'PIVELER') {
            setProducts(piveler)
        }

        if(filter === 'PIVEQELYANALTILARI') {
            setProducts(piveQelyanaltilari)
        }

        if(filter === 'CAYLAR') {
            setProducts(caylar)
        }

    },
    [filter])

  return (
    <section>
        <Container>
            <Row>
                <Col className='text-center mb-4' lg='12'>
                    <h3 className='menu__title'>Menyu</h3>
                    </Col>
                    <Col lg='12' className='text-center mb-5'>
                        <button className={`filter-btn ${filter == 'XENGELLER' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('XENGELLER')}>Xəngəllər</button>

                        <button  className={`filter-btn ${filter == 'GURCUMETBEXI' ? 'active__btn' : ''} mb-3` } onClick={() => setFilter('GURCUMETBEXI')}>Gürcü Mətbəxi</button>

                        <button  className={`filter-btn ${filter == 'QAZANYEMEKLERI' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('QAZANYEMEKLERI')}>Qazan Yeməkləri</button>

                        <button  className={`filter-btn ${filter == 'ISTIYEMEKLER' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('ISTIYEMEKLER')}>İsti Yeməklər</button>
                        
                        <button className={`filter-btn ${filter == 'BALIQLAR' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('BALIQLAR')}>Baliqlar</button>

                        <button className={`filter-btn ${filter == 'KABABLAR' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('KABABLAR')}>Kabablar</button>

                        <button className={`filter-btn ${filter == 'SOYUQQELYANALTILAR' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('SOYUQQELYANALTILAR')}>Soyuq Qelyanaltılar</button>

                        <button className={`filter-btn ${filter == 'SPIRTSIZICKILER' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('SPIRTSIZICKILER')}>Spirtsiz İçkilər</button>

                        <button className={`filter-btn ${filter == 'ARAQLAR' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('ARAQLAR')}>Araqlar</button>

                        <button className={`filter-btn ${filter == 'PIVELER' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('PIVELER')}>Pivə </button>

                        <button className={`filter-btn ${filter == 'PIVEQELYANALTILARI' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('PIVEQELYANALTILARI')}>Pivə Qəlyanaltılar</button>

                        <button className={`filter-btn ${filter == 'CAYLAR' ? 'active__btn' : ''} mb-3`} onClick={() => setFilter('CAYLAR')}>Çay</button>
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