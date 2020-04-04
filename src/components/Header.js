import React, { useEffect, useState } from 'react'
// import { Link } from 'react-dom'
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'
import ProductImg from '../images/band-sprite.jpg'
import Swal from 'sweetalert2'
//redux導入高階元件的方法
import { connect } from 'react-redux'
// 部份綁定action creators
import * as actionCreators from '../actions/index'

function Header(props) {
  //購物車商品資料
  const [cartData, setCartData] = useState([])
  //購物車更新
  const [cartUpdate, setCartUpdate] = useState(0)
  //總金額
  let total = 0

  const handleDelete = (productId) => {
    Swal.fire({
      title: '確認刪除該品項?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#8f8f8f',
      confirmButtonText: '確認',
      cancelButtonText: '返回',
    }).then((result) => {
      if (result.value) {
        let index = cartData.map((v) => v.id).indexOf(productId)
        if (index >= 0) {
          setCartUpdate(cartUpdate + 1)
          //移除元素
          cartData.splice(index, 1)
          localStorage.setItem('cart', JSON.stringify(cartData))
        }
        Swal.fire({
          title: '刪除成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload()
        })
      }
      return
    })
  }
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem('cart')))
  }, [cartUpdate])
  return (
    <>
      <div id="home"></div>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="p-3">
        <Container>
          <Navbar.Brand href="#home" className="scroll-trigger">
            Fitness Band
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="#intro" className="scroll-trigger">
                介紹
              </Nav.Link>
              <Nav.Link href="#gallery" className="scroll-trigger">
                圖集
              </Nav.Link>
              <Nav.Link href="#spec" className="scroll-trigger">
                規格
              </Nav.Link>
              <NavDropdown
                className="cart-dropdown text-center"
                title={
                  <>
                    <FaShoppingCart className="mr-1 mb-1" />
                    購物車
                  </>
                }
                id="basic-nav-dropdown"
              >
                {cartData !== null && cartData.length ? (
                  cartData.map((v, i) => {
                    total += v.amt * v.value
                    return (
                      <div className="d-flex align-items-center px-3" key={i}>
                        <figure className="cartImg">
                          <div
                            className="bandimg"
                            style={{
                              background: `url(${ProductImg}) no-repeat ${v.bgX} ${v.bgY}`,
                            }}
                          ></div>
                        </figure>
                        <div className="cartTxt">{v.name}</div>
                        <div className="mr-3">${v.amt}</div>
                        <div className="mr-3">x{v.value}</div>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ml-auto"
                          onClick={() => handleDelete(v.id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    )
                  })
                ) : (
                  <div className="text-center p-2">暫無選購商品</div>
                )}
                {total ? (
                  <>
                    <hr />
                    <div className="text-right px-3">{`總金額 $${total}`}</div>
                  </>
                ) : (
                  ''
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = (store) => {
  return { total: store.total }
}

export default connect(mapStateToProps, actionCreators)(Header)
