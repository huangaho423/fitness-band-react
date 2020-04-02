import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <footer className="py-5 px-4 border-top">
        <div className="container">
          <Row>
            <Col md={3} className="mb-3 text-center text-md-left">
              <h5>產品與配件</h5>
              <hr />
              <ul className="list-unstyled text-small">
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    熱門商品分類
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    全部商品分類
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="mb-3 text-center text-md-left">
              <h5>客戶支援</h5>
              <hr />
              <ul className="list-unstyled text-small">
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    服務條款及細則
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    售後服務政策
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    退貨須知
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    配送規範
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="mb-3 text-center text-md-left">
              <h5>關於 Fitness</h5>
              <hr />
              <ul className="list-unstyled text-small">
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    瞭解我們
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    聯絡我們
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    隱私條款
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-muted" to="#">
                    用戶協議
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} className="text-center mt-4 mt-md-0">
              <img
                className="mb-2"
                src={require('../images/logo.png')}
                alt="logo"
                width="70"
              />
              <small className="d-block mb-3 text-muted">© 2020</small>
              <small className="d-block mb-3 text-muted">
                本頁面僅供作品展示
              </small>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  )
}

export default Footer
