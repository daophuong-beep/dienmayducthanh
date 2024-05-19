import RecommendItem from "../items/RecommendItem";

function RecommendProduct({products}) {
    return (
       
            <div className="w-pd-i-right">
                <div className="w-pl-sameprice w-fix" id="w-fix">
                    <p className="w-pl-sp-head">Có thể bạn quan tâm</p>
                    <ul className="l w-pl-sp-list">
                        {products.map((product, index) => (
                            <RecommendItem key={index} {...product} />
                        ))}
                    </ul>
                    <div className="cl"></div>
                </div>
            </div>
    );
}

export default RecommendProduct;