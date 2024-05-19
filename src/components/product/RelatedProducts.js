import RelatedItem from "../items/RelatedItem";

const RelatedProducts = ({ products }) => {
    return (
        <div className="w-pl-samebrand">
            <p className="w-pl-sb-head">
                Sản phẩm cùng hãng
            </p>
            <ul className="l w-pl-sb-list pl-item-hover">
                {products.map((product, index) => (
                    <RelatedItem key={index} product={product} />
                ))}
            </ul>
            <div className="cl">
            </div>
        </div>
    );
};

export default RelatedProducts;