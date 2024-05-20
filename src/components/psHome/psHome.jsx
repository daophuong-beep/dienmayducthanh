import HomeItems from "../items/HomeItems";

const PsHome = ({
  data = [],
  linkTag1 = "",
  linkTag2 = "",
  linkTag3 = "",
  linkTag4 = "",
  linkTag5 = "",
}) => {
  console.log(data, "data");
  return (
    
        <div className="ps-home">
          <div className="ps-h-head">
            <div className="ps-h-head-h3">
              <div className="ps-h-head-title">
                <a
                  href="/dieu-hoa/panasonic/"
                  target="_blank"
                  className="ps-h-head-link"
                >
                  {linkTag1}
                </a>
              </div>
              <ul className="l m-by-brand">
                <li>
                  <a target="_blank" href="/dieu-hoa-am-tran/panasonic/">
                    {linkTag2}
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-tu-dung/panasonic/">
                    {linkTag3}
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-noi-ong-gio/panasonic/">
                    {linkTag4}
                  </a>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <a target="_blank" href="/dieu-hoa-multi/panasonic/">
                    {linkTag5}
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
            {data?.map((product, index) => {
              return (
                <li className="li_item_home" key={index}>
                  <HomeItems
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
                </li>
              );
            })}
          </ui>
        </div>
    
  );
};
export default PsHome;
