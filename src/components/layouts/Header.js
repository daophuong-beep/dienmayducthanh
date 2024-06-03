const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <div id="w-header">
          <div className="w-h-top">
            <p className="w-h-top-h3">Chuyên gia điện máy</p>
            <ul className="l menu-top">
              <li>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="/tin/kien-thuc-tieu-dung/"
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="/dia-chi-lien-he.htm">
                  Địa chỉ li&#234;n hệ
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="/rss/">
                  Rss
                </a>
              </li>
              <li>
                <a target="_blank" rel="nofollow" href="/sitemap.htm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="cl"></div>
            {/* <div className="w-h-left">
              <a href="/" rel="nofollow" title="Trang chủ"></a>
            </div> */}
          <div className="w-h-center">
            <div className="w-h-c-search">
              <form action="/tim-kiem" method="get">
                <input
                  id="w-h-c-s-keyword"
                  type="text"
                  placeholder="Tìm kiếm sản phẩm, model ..."
                  autoComplete="off"
                  value=""
                  name="tukhoa"
                />
                <input type="submit" value="Tìm kiếm" />
                <div
                  id="w-h-c-s-autocomplete"
                  style={{ display: "none" }}
                ></div>
              </form>
            </div>
          </div>
          <div className="w-h-right">
            <div className="wh-call">
              <ul className="l m-by-parent">
                <li>
                  <a target="_blank" href="tel:02437656333">
                    (024) 37656 333 -
                  </a>
                </li>
                <li>
                  <a target="_blank" href="tel:02435430820">
                    (024) 3543 0820
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cl"></div>
          <nav id="w-menu" className="w-menu">
            <ul className="l menu-pc">
            <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dieu-hoa-gia-re/">
                    <img
                      src="/Images/Menu/dieu-hoa-YY6qaB.png"
                      alt="Điều h&#242;a"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/dieu-hoa-gia-re/">
                  Điều hòa Nhật
                  <i></i>
                </a>
              </li>
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/gia-dung/">
                    <img
                      src="/Images/Menu/binh-nong-lanh-MJ9l2x.png"
                      alt="Gia dụng"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/gia-dung/">
                  Gia dụng Nhật
                  <i></i>
                </a>
              </li>
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/tivi/">
                    <img src="/Images/Menu/tivi-47y5S8.png" alt="Tivi" />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/tivi/">
                  Lọc nước kiềm
                  <i></i>
                </a>
              </li>
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dieu-hoa/">
                    <img
                      src="/Images/Menu/dieu-hoa-treo-tuong-29zd93.png"
                      alt="Điều h&#242;a treo tường"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/dieu-hoa/">
                  Điều hòa treo tường
                  <i></i>
                </a>
              </li>
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dieu-hoa-am-tran/">
                    <img
                      src="/Images/Menu/dieu-hoa-am-tran-4m72A0.png"
                      alt="Điều h&#242;a &#226;m trần"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/dieu-hoa-am-tran/">
                  Điều hòa âm trần
                  <i></i>
                </a>
              </li>
              {/* <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dieu-hoa-noi-ong-gio/">
                    <img
                      src="/Images/Menu/dieu-hoa-noi-ong-gio-YCA4oy.png"
                      alt="Điều h&#242;a nối ống gi&#243;"
                    />
                  </a>
                </p>
                <a
                  className="m-pc-r-a m-pc-i-0-0"
                  href="/dieu-hoa-noi-ong-gio/"
                >
                  Điều hòa nối ống gió
                  <i></i>
                </a>
              </li> */}
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dieu-hoa-tu-dung/">
                    <img
                      src="/Images/Menu/dieu-hoa-dung-Iyl1E3.png"
                      alt="Điều h&#242;a Tủ đứng"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/dieu-hoa-tu-dung/">
                  Điều hòa Tủ đứng
                  <i></i>
                </a>
              </li>

              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/may-giat/">
                    <img
                      src="/Images/Menu/may-giat-may-say-ERvY3p.png"
                      alt="M&#225;y giặt"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/may-giat/">
                  Máy giặt
                  <i></i>
                </a>
              </li>
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/binh-nong-lanh/">
                    <img
                      src="/Images/Menu/binh-nong-lanh-KqyIH3.png"
                      alt="B&#236;nh n&#243;ng lạnh"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/binh-nong-lanh/">
                  Bình nóng lạnh
                  <i></i>
                </a>
              </li>
       
              <li className="m-pc-root">
                <p className="m-pc-r-img">
                  <a href="/dien-lanh/">
                    <img
                      src="/Images/Menu/tu-lanh-hzFa6u.png"
                      alt="Điện lạnh"
                    />
                  </a>
                </p>
                <a className="m-pc-r-a m-pc-i-0-0" href="/dien-lanh/">
                  Điện lạnh
                  <i></i>
                </a>
              </li>
            
            </ul>
          </nav>
        </div>
      </header>
      <div className="cl"></div>
      <div id="menu-shadow"></div>
      <div className="cl"></div>
    </>
  );
};

export default Header;
