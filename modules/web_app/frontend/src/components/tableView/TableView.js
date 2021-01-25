import React from "react";
import Button from 'react-bootstrap/Button'
import "./TableView.css";

export default function TableView ({
}) {
  return(
    <div class="container">
      <div class="row">
        <div class="header col-1 text-center">
          <div id="text1">
            <label>#</label>
          </div>
        </div>

        <div class="header col-3 text-center">
          <div id="text2">
            <label>BaiViet</label>
          </div>
        </div>

        <div class="header col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div id="text3">
            <label>TenMien</label>
          </div>
        </div>

        <div class="header col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div id="text4">
            <label>NgayVaoHeThong</label>
          </div>
        </div>

        <div class="header col-1 col-sx-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center">
          <div id="text5">
            <label>SimScore</label>
          </div>
        </div>

        <div class="header col-1 col-sx-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center">
          <div id="text6">
            <label>DupComp</label>
          </div>
        </div>

        <div class="header col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div id="text7">
            <label>BieuQuyetBaiGoc</label>
          </div>
        </div>
      </div>

      {/* API call to get data for the columns below */}
      <div class="row top-buffer">
        <div class="col-1 text-center">
          <div id="text1">
            1
          </div>
        </div>

        <div class="col-3 text-center">
          <div id="text2">
            bai 1
          </div>
          <div id="text2">
            bai 2
          </div>
        </div>

        <div class="col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div id="text3">
            mien 1
          </div>
          <div id="text3">
            mien 2
          </div>
        </div>

        <div class="col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div id="text4">
            vcxvxcvxcvxcvxcv
          </div>
          <div id="text4">
            vxcvxcvxcvxcvxcvxv
          </div>
        </div>

        <div class="col-1 col-sx-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center">
          <div id="text5">
            0.1
          </div>
        </div>

        <div class="col-1 col-sx-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 text-center">
          <button type="button" class="btn btn-outline-primary btn-sm">SoSanh</button>
        </div>

        <div class="col-2 col-sx-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
          <div class="row">
            <div class="col-6">
                15
            </div>
            <div class="col-6">
                10
            </div>
          </div>
          <div class="row">
            <div class="col-6">
                25
            </div>
            <div class="col-6">
                30
            </div>    
          </div>
          
        </div>
      </div>

      <div class="row top-buffer bottom-buffer">
        <div class="col text-center">
          <Button variant="primary" size="sm">XemThem</Button>{' '}
        </div>
      </div>
      
    </div>
    
    
  )
}
    
    