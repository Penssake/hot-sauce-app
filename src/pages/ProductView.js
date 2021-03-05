import Image from "../components/Image";
import Button from "../components/Button";
import NotFound from "../components/NotFound";

const ProductView = ({ id, data }) => {
    const current = data.filter(item => item.id === Number(id));
    const product = current[0].productView;
    console.log(product)

    return (
        <>
            {product ?
                <>
                    <div className="product-view">
                        <section className="product-view__stage">
                            <h2>{product.title}</h2>
                            <Image srcKey={product.img.src} alt={product.img.alt} url={product.url || false} classKey="product-view__image" />
                        </section>
                        <section className="product-view__description">
                            <h3>{product.description}</h3>
                            <Button href="/" icon="home" classKey="product-view__home" link={true} />
                        </section >
                    </div>
                </>
                :
                <NotFound />}
        </>
    )
}

export default ProductView;