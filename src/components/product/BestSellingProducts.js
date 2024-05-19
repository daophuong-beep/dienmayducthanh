import BestSellingItem from "../items/BestSellingItem";

const BestSellingProducts = ({ products }) => {
    return <div className="ps-bestsell">
        <div className="w-body">
            <p className="ps-bs-head">
                Sản phẩm bán chạy</p>
            <div className="cl">
            </div>
            <ul className="l ps-bs-list pl-item-hover">
                {products.map((product, index) => (
                    <BestSellingItem key={index} product={product} />
                ))}
            </ul>
            <div className="cl">
            </div>
        </div>
    </div>
}

export default BestSellingProducts;