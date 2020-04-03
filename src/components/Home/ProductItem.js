import React, { useState, useEffect, useRef } from 'react'
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
// 導入高階元件的方法
import { connect } from 'react-redux'
// 部份綁定action creators
// import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/index'

function ProductItem(props) {
  //設定購物車狀態
  const [cartChk, setCartChk] = useState(0)
  //尋找購物車是否有該品項商品ID
  const findProductIndex = props.total.map(v => v.id).indexOf(props.item.id)

  useEffect(() => {
    console.log(props.total)
  }, [cartChk])
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
                      onClick={() => {
                        props.minusValue(props.item.id, 1, props.item.amt)
                        setCartChk(cartChk - 1)
                      }}
                    >
                      <FaMinus className="mr-1" />
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control-plaintext border-secondary bg-white text-center text-secondary input-number"
                    value={
                      findProductIndex >= 0
                        ? props.total[findProductIndex].value
                        : 0
                    }
                    readOnly
                  />
                  <InputGroup.Prepend>
                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="btn-count"
                      onClick={() => {
                        props.addValue(props.item.id, 1, props.item.amt)
                        setCartChk(cartChk + 1)
                      }}
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

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return { total: store.total }
}

export default connect(mapStateToProps, actionCreators)(ProductItem)
