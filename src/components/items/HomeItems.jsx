const HomeItems = ({name='', features= [], link = '', imgSrc='',discount_percent = '', model ='',original_price='',discounted_price=''}) => {
    return (
        <>
          <div className="pl-item-hover-des">
            <a className="pl-item-hover-name" href={link}
                title={name}>
                {name}
            </a>
            <ul className="l pr-des-featured">
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>
        </div>
        {discount_percent && (
          <p className="w-pl-sb-l-discont">▼ {discount_percent}%</p>
        )}
        <p className="w-pl-sb-l-img">
            <a href={link} title={name}>
                <img src={imgSrc}
                    title={name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    alt={NavigationPreloadManager} />
            </a>
        </p>
        <p className="w-pl-sb-l-name">
            <a href="/dieu-hoa/casper/tc09is36.htm" title={name} style={{color: '#000000'}}>
           {name}
                <span className="w-pl-sb-l-model">
                {model}
                </span></a>
        </p>
        <p className="w-pl-sb-l-pricemarket">
        {original_price?.toLocaleString('vi-VN')} đ
        </p>
        <p className="w-pl-sb-l-price">
        {discounted_price?.toLocaleString('vi-VN')} đ
        </p>
        <div className="cl">
        </div>
        </>
    )
}

export default HomeItems