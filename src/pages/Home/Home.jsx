import { Footer, Header } from "../../components/layouts";
import data from "../../apis/data";
import ProductItem from "../../components/items/ProductItem";
import { dataTotal } from "../../constanst";
import { useEffect, useState } from "react";
import HomeItems from "../../components/items/HomeItems";
import PsHome from "../../components/psHome/psHome";
let tempCount = {
  Panasonic: [],
  Daikin: [],
  LG: [],
  Casper: [],
  Funiki: [],
  Midea: [],
  Gree: [],
};
const LIST_HOME_MANUFACTURE = [
  "Panasonic",
  "Daikin",
  "LG",
  "Casper",
  "Funiki",
  "Midea",
  "Gree",
];
const Home = () => {
  const { relatedProducts } = data;
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [homeProduct, setHomeProduct] = useState({
    Panasonic: [],
    Daikin: [],
    LG: [],
    Casper: [],
    Funiki: [],
    Midea: [],
    Gree: [],
  });

  // Loop through each category in the data object
  useEffect(() => {
    const newBestSellingProducts = [];
    Object.keys(dataTotal).forEach((category) => {
      // Check if the category contains products
      if (Array.isArray(dataTotal[category])) {
        // Filter products where 'inBestSellingProducts' is true and add them to the bestSellingProducts array
        dataTotal[category].forEach((product) => {
          if (product.inBestSellingProducts) {
            newBestSellingProducts.push(product);
          }
        });
      } else {
        Object.keys(dataTotal[category]).forEach((subCategory) => {
          if (Array.isArray(dataTotal[category][subCategory])) {
            dataTotal[category][subCategory].forEach((product) => {
              if (product.inBestSellingProducts) {
                const temp = {
                  ...product,
                  category: category,
                  subCategory: subCategory,
                };

                newBestSellingProducts.push(temp);
              }

              if (LIST_HOME_MANUFACTURE.includes(product?.Manufacturer)) {
                if (
                  tempCount[product.Manufacturer] &&
                  tempCount[product.Manufacturer].length > 3
                ) {
                  return;
                }
                tempCount = {
                  ...tempCount,
                  [product.Manufacturer]: [
                    ...tempCount[product.Manufacturer],
                    product,
                  ],
                };
                const temp = {
                  ...product,
                  category: category,
                  subCategory: subCategory,
                };
                setHomeProduct((pre) => ({
                  ...pre,
                  [product.Manufacturer]: [
                    ...pre[product.Manufacturer],
                    temp,
                  ],
                }));
              }
            });
          }
        });
      }
    });
    setBestSellingProducts(newBestSellingProducts);
  }, []); // Include dataTotal in dependency array if it can change

  console.log("homeProduct", homeProduct);

  return (
    <>
      {/* <Header /> */}
      <div className="ps-bestsell">
        <div className="w-body">
          <p className="ps-bs-head">Sản phẩm bán chạy</p>
          <div className="cl"></div>
          <ul className="l ps-bs-list pl-item-hover">
            {bestSellingProducts.slice(0, 4).map((product, index) => {
              return (
                <ProductItem
                  key={index}
                  name={product?.name}
                  model={product?.code}
                  link={`/${product?.category}/${product?.subCategory}/${product?.code}`}
                  features={product?.features}
                  discount_percent={product?.discount}
                  title={product?.title}
                  imgSrc={product?.image}
                  original_price={product?.price?.original}
                  discounted_price={product?.price?.discounted}
                />
              );
            })}
          </ul>
          <div className="cl"></div>
        </div>
      </div>

      <div className="cl"></div>
      <div className="cl"></div>

      <div className="w-body">
        <div className="cl"></div>
        {/* <div className="ps-home">
          <div className="ps-h-head">
            <div className="ps-h-head-h3">
              <div className="ps-h-head-title">
                <a
                  href="/dieu-hoa/panasonic/"
                  target="_blank"
                  className="ps-h-head-link"
                >
                  Điều hòa Panasonic
                </a>
              </div>
              <ul className="l m-by-brand">
                <li>
                  <a target="_blank" href="/dieu-hoa-am-tran/panasonic/">
                    Điều hòa âm trần Panasonic
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-tu-dung/panasonic/">
                    Điều hòa tủ đứng Panasonic
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-noi-ong-gio/panasonic/">
                    Điều hòa nối ống gió Panasonic
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-multi/panasonic/">
                    Điều hòa multi Panasonic
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
              </ul>
              <div className="cl"></div>
            </div>
          </div>
          <div className="cl"></div>

          <ui className="l ps-h-list pl-item-hover">
            {homeProduct?.Panasonic.map((product, index) => {
              return (
                <li className="li_item_home" key={index}>
                  <HomeItems name={product?.name} 
                   model={product?.code}
                  link={`/${product?.category}/${product?.subCategory}/${product?.code}`}
                  features={product?.features}
                  discount_percent={product?.discount}
                  title={product?.title}
                  imgSrc={product?.image}
                  original_price={product?.price?.original}
                  discounted_price={product?.price?.discounted}  />
                </li>
              );
            })}
          </ui>
        </div> */}
        <PsHome
          data={homeProduct?.Panasonic}
          linkTag2="Điều hòa âm trần Panasonic"
          linkTag3="Điều hòa tủ đứng Panasonic"
          linkTag4="Điều hòa nối ở gió Panasonic"
          linkTag5="Điều hòa multi Panasonic"
          linkTag1="ĐIỀU HÒA PANASONIC"
        />
        <PsHome
          data={homeProduct?.Daikin}
          linkTag1="ĐIỀU HÒA DAIKIN"
          linkTag2="Điều hòa âm trần Daikin"
          linkTag3="Điều hòa tủ đứng Daikin"
          linkTag4="Điều hòa nối ở gió Daikin"
          linkTag5="Điều hòa multi Daikin"
        />
        <PsHome
          data={homeProduct?.LG}
          linkTag1="ĐIỀU HÒA LG"
          linkTag2="Điều hòa âm trần LG"
          linkTag3="Điều hòa tủ đứng LG"
          linkTag4="Điều hòa nối ở gió LG"
          linkTag5="Điều hòa multi LG"
        />
        <PsHome
          data={homeProduct?.Casper}
          linkTag1="ĐIỀU HÒA CASPER"
          linkTag2="Điều hòa âm trần Casper"
          linkTag3="Điều hòa tủ đứng Casper"
          linkTag4="Điều hòa nối ở gió Casper"
          linkTag5="Điều hòa multi Casper"
        />

        <PsHome
          data={homeProduct?.Funiki}
          linkTag1="ĐIỀU HÒA FUNIKI"
          linkTag2="Điều hòa âm trần Funiki"
          linkTag3="Điều hòa tủ đứng Funiki"
          linkTag4="Điều hòa nối ở gió Funiki"
          linkTag5="Điều hòa multi Funiki"
        />

        <PsHome
          data={homeProduct?.Midea}
          linkTag1="ĐIỀU HÒA MIDEA"
          linkTag2="Điều hòa âm trần Midea"
          linkTag3="Điều hòa tủ đứng Midea"
          linkTag4="Điều hòa nối ở gió Midea"
          linkTag5="Điều hòa multi Midea"
        />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
