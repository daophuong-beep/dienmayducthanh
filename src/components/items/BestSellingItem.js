const BestSellingItem = ({ product }) => {
    return <li>
        <div className="pl-item-hover-des">
            <a className="pl-item-hover-name" href="/dieu-hoa/panasonic/xpu9xkh8.htm"
                title={product.name}>
                {product.name}
            </a>
            <ul className="l pr-des-featured">
            {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
        </div>

        <p className="ps-bs-l-discont">
            ▼ 13 %
        </p>
        <p className="ps-bs-l-img">
            <a href="/dieu-hoa/panasonic/xpu9xkh8.htm"
                title="Điều hòa Panasonic 9000 BTU 1 chiều inverter XPU9XKH-8">
                <img src="./Images/Product/thumb_xpu9xkh8-419yK7.jpg"
                    title="Điều hòa Panasonic 9000 BTU 1 chiều inverter XPU9XKH-8"
                    alt="Điều hòa Panasonic 9000 BTU 1 chiều inverter XPU9XKH-8" />
            </a>
        </p>
        <p className="ps-bs-l-name">
            <a href="/dieu-hoa/panasonic/xpu9xkh8.htm"
                title="Điều hòa Panasonic 9000 BTU 1 chiều inverter XPU9XKH-8">
                  {product.name}
                <span className="ps-bs-l-model">
                {product.model}
                </span></a>
        </p>
        <p className="ps-bs-l-pricemarket">
        {product.original_price}
        </p>
        <p className="ps-bs-l-price">
        {product.discounted_price}

        </p>
        <div className="cl">
        </div>
    </li>
}

export default BestSellingItem;