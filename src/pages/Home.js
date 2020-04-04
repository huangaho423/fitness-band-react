import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Kv from '../components/Home/Kv'
import Intro from '../components/Home/Intro'
import Gallery from '../components/Home/Gallery'
import Spec from '../components/Home/Spec'
import Product from '../components/Home/Product'
import Loading from '../components/Loading'
//jQuery
import $ from 'jquery'

function Home(props) {
  //設定載入狀態
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    //超連結位置滑動效果
    $('body').on(
      'click',
      `a.scroll-trigger[href*="#"]:not([href="#"])`,
      function (e) {
        let obj = $(e.target).attr('href').slice(1)
        obj = $('#' + obj)
        $('html, body').animate({ scrollTop: obj.offset().top - 70 }, 1000)
      }
    )
    //載入畫面
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [props.location.pathname])
  return (
    <>
      {loaded ? '' : <Loading />}
      <Kv />
      <Intro />
      <Gallery />
      <Spec />
      <Product />
    </>
  )
}

export default withRouter(Home)
