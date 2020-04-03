import React from 'react'
import { Container } from 'react-bootstrap'

function Kv() {
  return (
    <>
      <section className="kv p-0">
        <div className="kv-text animated fadeInUp">
          <Container className="text-center text-shadow">
            <h1 className="display-4">Fitness Band</h1>
            <p className="h3 mb-3">多運動 多健康</p>
            <p>觸控大螢幕 100公尺防水</p>
            <p>
              <a
                className="btn btn-info btn-lg mr-3"
                href="#intro"
                role="button"
              >
                了解更多
              </a>
              <a
                className="btn btn-primary btn-lg"
                href="#product"
                role="button"
              >
                直接購買
              </a>
            </p>
          </Container>
        </div>
        <figure className="kv-bg">
          <video autoPlay muted loop>
            <source src={require('../../video/video.mp4')} type="video/mp4" />
          </video>
        </figure>
      </section>
    </>
  )
}

export default Kv
