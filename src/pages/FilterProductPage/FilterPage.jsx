import { useState } from "react";
import { dataTotal } from "../../constanst";

const FilterPage = () => {
    const [dataFilter,setDataFilter] = useState(dataTotal)
    console.log('data',dataTotal["dieu-hoa"])
  return (
    <>
      <div className="cl"></div>
      <div className="menu-shadow"></div>
      <div className="cl" />
      <section>
        <div className="w-body">
          <ul className="l path path-product">
            <li>
              <a title="Trang chủ" rel="nofollow" href="/">
                <span>Trang chủ</span>
              </a>
            </li>
            <li>
              <span>Điều hòa treo tường</span>
            </li>
            <li>
              <h1>Điều hòa giá rẻ, Điều hòa chính hãng</h1>
            </li>
          </ul>
          <div>
            <div className="w-productlist">
              <div className="left_filter_p">
                <div className="filter-product-wrapper">
                  <p className="filter-options-head">Điều hòa</p>
                  <ul className="list-filter-options">
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/"
                        title="Điều hòa treo tường"
                      >
                        Điều hòa treo tường
                      </a>
                    </li>
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa-am-tran/"
                        title="Điều hòa âm trần"
                      >
                        Điều hòa âm trần
                      </a>
                    </li>
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa-tu-dung/"
                        title="Điều hòa tủ đứng"
                      >
                        Điều hòa tủ đứng
                      </a>
                    </li>
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa-noi-ong-gio/"
                        title="Điều hòa nối ống gió"
                      >
                        Điều hòa nối ống gió
                      </a>
                    </li>
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa-multi/"
                        title="Điều hòa Multi"
                      >
                        Điều hòa Multi
                      </a>
                    </li>
                    <li className="filter-option">
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa-ap-tran/"
                        title="Điều hòa áp trần"
                      >
                        Điều hòa áp trần
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cl" />
                <div className="filter-product-wrapper">
                  <p className="filter-options-head">Hãng sản xuất</p>
                  <ul className="list-filter-options">
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/panasonic/"
                        title="Panasonic"
                      >
                        Panasonic
                      </a>
                    </li>
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/daikin/"
                        title="Daikin"
                      >
                        Daikin
                      </a>
                    </li>
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/lg/"
                        title="LG"
                      >
                        LG
                      </a>
                    </li>
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/casper/"
                        title="Casper"
                      >
                        Casper
                      </a>
                    </li>
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/funiki/"
                        title="Funiki"
                      >
                        Funiki
                      </a>
                    </li>
                    <li>
                      <a
                        className="filter-option-link"
                        href="/dieu-hoa/midea/"
                        title="Midea"
                      >
                        Midea
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right_filter_p">
                <div className="w-pl-r-order">
                  <select
                    name="Type"
                    class="form-control"
                    onchange="fSelectChange(this.options[this.selectedIndex].value)"
                  >
                    <option value="">----- Sắp xếp theo -----</option>
                    <option
                      value="/dieu-hoa-am-tran/midea/?&amp;shortby=gia-thap"
                      selected="selected"
                    >
                      Giá thấp đến cao
                    </option>
                    <option value="/dieu-hoa-am-tran/midea/?&amp;shortby=gia-cao">
                      Giá cao đến thấp
                    </option>
                  </select>
                </div>
                <ul className="l w-pl-r-list pl-item-hover">
                    <li className="list_product_filter">

                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPage;
