import { Footer, Header } from '../../components/layouts';
import data from '../../apis/data';
import Detail from '../../components/product/Detail';
import Content from '../../components/product/Content';
import RecommendProduct from '../../components/product/RecommendProducts';
import RelatedProducts from '../../components/product/RelatedProducts';
import BestSellingProducts from '../../components/product/BestSellingProducts';
import { useParams } from 'react-router-dom';
import { dataTotal } from '../../constanst';
import { useEffect, useState } from 'react';

function DetailProduct() {
  const [dataProduct,setDataProduct] = useState(null)
  const {catagory,subCatagory,code} = useParams()
  useEffect(()=>{
    Object.keys(dataTotal).forEach(key => {
      if(key === catagory){
        Object.keys(dataTotal[key]).forEach(subKey => {
          if(subKey === subCatagory){
            const product = dataTotal[key][subKey].find(item => item.code === code)
            setDataProduct(product)
          }
        })
      }
    })
  },[catagory, code, subCatagory])
  console.log('dataProduct',dataProduct);
  return (
    <>
      <Header />
      <section>

        <div className="cl">
        </div>

        <div className="cl">
        </div>

        <div className="w-body">
          <div className="w-productdetail">
            <div className="cl">
            </div>
            <div className="space">
            </div>
            <ul className="l path path-product path-productdetail"
              itemType="https://schema.org/BreadcrumbList">
              <li><a title="Trang chủ" rel="nofollow" href="/"><span>Trang chủ</span> </a></li>

              <li className="breadcrumb-item" itemProp="itemListElement"
                itemType="https://schema.org/ListItem">
                <a href="/dieu-hoa/" itemProp="item"><span itemProp="name">{catagory}</span>
                  <meta itemProp="position" content="1" />
                </a>
              </li>

              <li className="breadcrumb-item" itemProp="itemListElement"
                itemType="https://schema.org/ListItem">
                <a href="/dieu-hoa/casper/" itemProp="item"><span itemProp="name">{subCatagory}</span>
                  <meta itemProp="position" content="2" />
                </a>
              </li>

              <li><span>{dataProduct?.name}</span> </li>
            </ul>
            <div className="cl">
            </div>
          </div>

          <Detail product={dataProduct} />

          <div className="w-pd-info">

            <Content content={data.content} />

            <RecommendProduct products={data.recommendProducts} />
          </div>

          <div className="cl">
    </div>

          <RelatedProducts products={data.relatedProducts}/>

          <div className="cl">
          </div>
        </div>
        <BestSellingProducts products={data.bestSellingProducts}/>
        <div className="cl">
        </div>

        <div className="cl">
        </div>

      </section>
      <Footer />
    </>
  );
}

export default DetailProduct;
