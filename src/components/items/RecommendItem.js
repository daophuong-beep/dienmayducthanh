function RecommendItem({ discount, image, title, href, originalPrice, price }) {
    return (
        <li>
            <p className="w-pl-sp-l-discont">{discount}</p>
            <p className="w-pl-sp-l-img">
                <a href={href} title={title}>
                    <img src={image} title={title} alt={title} />
                </a>
            </p>
            <p className="w-pl-sp-l-name">
                <a href={href} title={title}>
                    {title}
                </a>
            </p>
            <p className="w-pl-sp-l-pricemarket">{originalPrice}</p>
            <p className="w-pl-sp-l-price">{price}</p>
            <div className="cl"></div>
        </li>
    );
}

export default RecommendItem;