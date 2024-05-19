const RelatedItem = ({ product }) => {
    return (
    <li>
        <div className="pl-item-hover-des">
            <a className="pl-item-hover-name" href="/dieu-hoa/casper/tc09is36.htm"
                title={product.name}>
                {product.name}
            </a>
            <ul className="l pr-des-featured">
                {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
        </div>
        <p className="w-pl-sb-l-discont">
            ▼ 14 %</p>
        <p className="w-pl-sb-l-img">
            <a href="/dieu-hoa/casper/tc09is36.htm" title="Điều hòa Casper inverter 1 chiều 9000 BTU TC-09IS36">
                <img src="./Images/Product/thumb_mc09is33-Q5Yxri.jpg"
                    title="Điều hòa Casper inverter 1 chiều 9000 BTU TC-09IS36"
                    alt="Điều hòa Casper inverter 1 chiều 9000 BTU TC-09IS36" />
            </a>
        </p>
        <p className="w-pl-sb-l-name">
            <a href="/dieu-hoa/casper/tc09is36.htm" title="Điều hòa Casper inverter 1 chiều 9000 BTU TC-09IS36">
            {product.name}
                <span className="w-pl-sb-l-model">
                {product.model}
                </span></a>
        </p>
        <p className="w-pl-sb-l-pricemarket">
            {product.original_price}
        </p>
        <p className="w-pl-sb-l-price">
            {product.discounted_price}
        </p>
        <div className="cl">
        </div>
    </li>
    )
}

export default RelatedItem;