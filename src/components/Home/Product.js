import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductImg from '../../images/band-sprite.jpg'

function Product() {
  return (
    <>
      <section className="product bg-dark" id="product">
        <Container>
          <div className="mb-5 text-center text-light">
            <h1>購買 Fitness Band</h1>
            <p className="lead">腕帶多色可選</p>
          </div>
          <Row id="productItem">
            <Col lg={4} className="mb-4">
              <Card className="box-shadow">
                <Card.Body>
                  <figure
                    className="bandimg"
                    style={{
                      background: `url(${ProductImg}) no-repeat -220px -650px`,
                    }}
                  ></figure>
                  <form className="input-group">
                    <select className="custom-select" required>
                      <option value="">請選擇</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="submit"
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="mr-1"
                        />
                        購買
                      </button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3 text-center">
            <Col>
              <Button variant="info">更多顏色</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Product
