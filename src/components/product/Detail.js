import React from "react";

const Detail = ({ product }) => {
  return (
    <div className="w-pd-body">
      <div className="w-pd-b-left">
        <p className="w-pd-b-l-discont">▼ {product?.discount} %</p>
        <div className="pd-img">
          <div className="homebanner_owl">
            <div id="owl-listslide" className="owl-carousel">
              <div className="item">
                <img src={product?.image} alt={product?.name} />
              </div>
            </div>
            <div className="cl"></div>
          </div>
        </div>
        <div className="cl"></div>
      </div>
      <div className="w-pd-b-right">
        <h1 className="w-pd-b-r-name">{product?.name}</h1>
        <div className="w-pd-b-r-col1">
          <div className="w-pd-main-feature">
            <span className="w-pd-mf-l">Mã sản phẩm</span>
            <span className="w-pd-mf-c">:</span>
            <span className="w-pd-mf-r color-orange">{product?.code}</span>
          </div>
          <p className="w-pd-main-feature">
            <span className="w-pd-mf-l">Bảo hành</span>
            <span className="w-pd-mf-c">:</span>
            <b className="w-pd-mf-r color-orange">
              Máy {product?.warranty.general}, máy nén{" "}
              {product?.warranty.compressor}
            </b>
          </p>
          <div className="cl"></div>
          <p className="w-pd-main-feature">
            <span className="w-pd-mf-l">Xuất xứ</span>
            <span className="w-pd-mf-c">:</span>
            <b className="w-pd-mf-r color-orange">
              {product?.origin.certification} {product?.origin.country}
            </b>
          </p>
          <div className="cl"></div>
          <div className="pd-specialoffer">
            <p>
              <strong>{product?.purchaseInfo.delivery}</strong>
            </p>
            <div className="cl"></div>
          </div>
          <div className="cl"></div>
        </div>
        <div className="w-pd-b-r-col3"></div>
        <div className="w-pd-b-r-col2">
          <p className="pd-pricemarket">
            {product?.price.original.toLocaleString("vi-VN")} đ
          </p>
          <p className="pd-price">
            {product?.price.discounted.toLocaleString("vi-VN")} đ
          </p>
          <p className="pd-orders">
            <a
              rel="nofollow"
              href={product?.purchaseInfo.orderLink}
              target="_blank"
              title="Mua hàng"
            ></a>
          </p>
          <p className="pd-note">
            (
            {product?.price.notes.split(",").map((note, index) => (
              <React.Fragment key={index}>
                {note}
                <br />
              </React.Fragment>
            ))}
            )<a href="#chitiet-5">Tham khảo bảng giá lắp đặt tại đây.</a>
          </p>
        </div>
        <div className="cl"></div>
        <div className="cl w-pd-b-r-border"></div>
        <div className="w-pd-b-r-col4">
          <ul className="l pr-des-featured">
            {product?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="w-pd-b-r-col6"></div>
        <div className="w-pd-b-r-col5">
          <p className="w-pd-b-r-col5-head">Đặt mua qua điện thoại</p>
          <p>
            <ul className="l menu-cellphones">
              <li>
                <a rel="nofollow" href="#">
                  Mỹ Đình
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  024.3543 0820
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  024.3543 0821
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  Thanh Xuân
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  024.3858 8000
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  024.3858 5000
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  Hotline (24/7)
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  091 4488 118
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  0912 87 5511
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  0912 668 118
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <a rel="nofollow" href="#">
                  0915 221 358
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
            </ul>

            <div className="cl"></div>
          </p>
          <div className="cl"></div>
          <ul className="l w-social">
            <li>
              <div
                className="fb-like"
                data-href="https://banhangtaikho.com.vn/dieu-hoa/casper/tc09is36.htm"
                data-layout="button_count"
                data-action="like"
                data-size="small"
                data-show-faces="false"
                data-share="true"
              ></div>
            </li>
          </ul>
          <div className="cl"></div>
        </div>
        <div className="cl"></div>
        <div className="pd-banner-payment">
          <ul className="l bn-by-ca">
            <li className="banner-item"></li>
          </ul>
        </div>
      </div>
      <div className="cl"></div>
    </div>
  );
};

export default Detail;
