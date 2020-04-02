import React from 'react'
import { Link } from 'react-dom'

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top border-bottom p-3">
        <div class="container">
          <a class="navbar-brand" href="#">
            Fitness Band
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mr-3">
                <a class="nav-link" href="#intro">
                  介紹
                </a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#album">
                  圖集
                </a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#spec">
                  規格
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary d-inline-block px-2" href="#buy">
                  <i class="fas fa-shopping-cart"></i>
                  購物車
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
