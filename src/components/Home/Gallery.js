import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Gallery() {
  return (
    <>
      <section className="gallery bg-dark pb-0" id="gallery">
        <Container fluid>
          <div className="mb-5 text-center text-light">
            <h1>圖集</h1>
          </div>
          <Row className="row-gallery">
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album01.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album02.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album03.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album05.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album06.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album07.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album08.jpg')} alt="" />
            </Col>
            <Col md={6} lg={3} className="col-gallery">
              <img src={require('../../images/album09.jpg')} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Gallery
