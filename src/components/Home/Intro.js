import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Intro() {
  return (
    <>
      <section className="intro" id="intro">
        <Container>
          <div className="text-center text-light text-shadow mb-5">
            <h1>新一代重磅登場</h1>
            <p className="lead">全新操作介面 有感升級</p>
            <p>
              LINE、來電等訊息顯示 / 100 公尺游泳防水 / 運動數據抬腕顯示 / 20
              天續航
            </p>
          </div>
          <Row className="text-center">
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/heartbeat.png')}
                    alt="heartbeat"
                  />
                  <p className="card-text">紀錄健康狀況</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/email.png')}
                    alt="email"
                  />
                  <p className="card-text">來電訊息顯示</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/full-battery.png')}
                    alt="full-battery"
                  />
                  <p className="card-text">超長效電池</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/water-resistant.png')}
                    alt="water-resistant"
                  />
                  <p className="card-text">100公尺防水</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/placeholder.png')}
                    alt="placeholder"
                  />
                  <p className="card-text">GPS定位輔助</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className="my-3">
              <Card className="card-intro mx-lg-5">
                <Card.Body>
                  <img
                    src={require('../../images/icon/clock.png')}
                    alt="clock"
                  />
                  <p className="card-text">精確時間顯示</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Intro
