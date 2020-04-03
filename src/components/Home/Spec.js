import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Spec() {
  return (
    <>
      <section className="spec" id="spec">
        <Container>
          <div className="mb-5 text-center">
            <h1>規格</h1>
            <p className="lead">Fitness Band 規格數據</p>
          </div>
          <div>
            <Table bordered>
              <thead className="thead-light text-center">
                <tr>
                  <th colSpan="2">尺寸</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>手環主體</td>
                  <td>17.9 x 46.9 x 12mm</td>
                </tr>
                <tr>
                  <td>腕帶</td>
                  <td>總長247mm</td>
                </tr>
                <tr>
                  <td>腕帶</td>
                  <td>可調長度155 - 216mm</td>
                </tr>
              </tbody>
              <thead className="thead-light text-center">
                <tr>
                  <th colSpan="2">規格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>電池容量</td>
                  <td>110mAh</td>
                </tr>
                <tr>
                  <td>待機時長</td>
                  <td>約 20 天</td>
                </tr>
                <tr>
                  <td>電池類型</td>
                  <td>鋰離子聚合物電池</td>
                </tr>
                <tr>
                  <td>輸入電壓</td>
                  <td>DC 5.0V</td>
                </tr>
                <tr>
                  <td>輸入電流</td>
                  <td>250mA Max</td>
                </tr>
                <tr>
                  <td>重量</td>
                  <td>約 20g（含腕帶）</td>
                </tr>
                <tr>
                  <td>主體材質</td>
                  <td>塑膠</td>
                </tr>
                <tr>
                  <td>防水等級</td>
                  <td>5ATM</td>
                </tr>
                <tr>
                  <td>工作溫度</td>
                  <td>-10℃～50℃</td>
                </tr>
                <tr>
                  <td>螢幕尺寸</td>
                  <td>0.78 吋</td>
                </tr>
                <tr>
                  <td>顯示螢幕解析度</td>
                  <td>128 x 80</td>
                </tr>
                <tr>
                  <td>感應器</td>
                  <td>三軸加速度感應器、PPG 心率感應器</td>
                </tr>
                <tr>
                  <td>無線連接</td>
                  <td>藍牙 4.2 BLE 版</td>
                </tr>
                <tr>
                  <td>腕帶材料</td>
                  <td>熱塑性彈性體</td>
                </tr>
                <tr>
                  <td>腕扣材料</td>
                  <td>鋁合金</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Spec
