import React, { useState, useEffect } from 'react'
import {
  Card,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa'
import ProductImg from '../../images/band-sprite.jpg'

function ProductItem(props) {
  const cartArr = []

  //減少數量
  const minusCart = () => {}
  //增加數量
  const addCart = () => {}

  useEffect(() => {}, [])
  return (
    <>
      <Col lg={4} className="mb-4">
        <Card className="box-shadow">
          <Card.Body>
            <figure
              className="bandimg"
              style={{
                background: `url(${ProductImg}) no-repeat ${props.item.bgPositionX} ${props.item.bgPositionY}`,
              }}
            ></figure>
            <div className="text-center h4">${props.item.amt}</div>
            <div className="text-center h5 text-muted">
              <small>庫存 {props.item.qty}</small>
            </div>
            <Row className="py-2 justify-content-between">
              <Col>
                <InputGroup className="input-counter">
                  <InputGroup.Prepend>
                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="btn-count"
                      onClick={() => minusCart()}
                    >
                      <FaMinus className="mr-1" />
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control-plaintext border-secondary bg-white text-center text-secondary input-number"
                    value="0"
                    readOnly
                  />
                  <InputGroup.Prepend>
                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="btn-count"
                      onClick={() => addCart()}
                    >
                      <FaPlus className="mr-1" />
                    </Button>
                  </InputGroup.Prepend>
                </InputGroup>
              </Col>
              <Col md="auto" className="mt-3 mt-md-0">
                <Button
                  type="button"
                  variant="primary"
                  className="btn-block btn-buy"
                >
                  <FaShoppingCart className="mr-1" />
                  <span>購買</span>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ProductItem
