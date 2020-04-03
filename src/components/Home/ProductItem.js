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
import Swal from 'sweetalert2'
//redux導入高階元件的方法
import { connect } from 'react-redux'
// 部份綁定action creators
import * as actionCreators from '../../actions/index'

function ProductItem(props) {
  //設定購物車狀態
  const [cartChk, setCartChk] = useState(0)
  //購物車抓取Local
  const [cartData, setCartData] = useState([])
  //尋找購物車是否有該品項商品ID
  const findProductIndex = props.total.map(v => v.id).indexOf(props.item.id)

  const handleAddToCart = () => {
    //寫入local storage
    localStorage.setItem('cart', JSON.stringify(props.total))
    Swal.fire({
      title: '已更新購物車',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload()
    })
    return
  }

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem('cart')))
  }, [])
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
                        //減少數量
                        props.minusValue(
                          props.item.id,
                          1,
                          props.item.amt,
                          props.item.qty,
                          props.item.name,
                          props.item.bgPositionX,
                          props.item.bgPositionY
                        )
                        return setCartChk(cartChk - 1) //為了偵測物件變化
                      }}
                    >
                      <FaMinus className="mr-1" />
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control-plaintext border-secondary bg-white text-center text-secondary input-number"
                    value={
                      //顯示目前數量
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
                        //增加數量
                        props.addValue(
                          props.item.id,
                          1,
                          props.item.amt,
                          props.item.qty,
                          props.item.name,
                          props.item.bgPositionX,
                          props.item.bgPositionY
                        )
                        return setCartChk(cartChk + 1) //為了偵測物件變化
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
                  onClick={() => handleAddToCart()}
                  disabled={!props.total[findProductIndex]}
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
