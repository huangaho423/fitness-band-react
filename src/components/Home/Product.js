import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import ProductItem from './ProductItem'

function Product() {
  const [product, setProduct] = useState([]) //商品資料
  const [open, setOpen] = useState(false) //隱藏顯示商品資訊

  //抓取JSON資料
  async function getDataJSON() {
    const request = new Request('/json/product.json', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data) //測試讀取
    setProduct(data)
  }

  useEffect(() => {
    //連結商品資料
    getDataJSON()
  }, [])
  return (
    <>
      <section className="product bg-dark" id="product">
        <Container>
          <div className="mb-5 text-center text-light">
            <h1>購買 Fitness Band</h1>
            <p className="lead">腕帶多色可選</p>
          </div>
          <Row id="productItem">
            {product.slice(0, 3).map((v, i) => (
              <ProductItem item={v} key={i} />
            ))}
            <Col>
              <Collapse in={open}>
                <Row id="example-collapse-text">
                  {product.slice(3).map((v, i) => (
                    <ProductItem item={v} key={i} />
                  ))}
                </Row>
              </Collapse>
            </Col>
          </Row>
          <Row className="mb-3 text-center">
            <Col>
              {!open ? (
                <Button
                  variant="info"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  更多顏色
                </Button>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Product
