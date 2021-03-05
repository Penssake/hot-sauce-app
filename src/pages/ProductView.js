import Image from "../components/Image";
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
                            <Image srcKey={product.img.src} alt={product.img.alt} url={product.url || false} classKey="product-view__image" />
                        </section>
                        <section className="product-view__description">
                            <h2>{product.title}</h2>
                            {product.description.map(p => <p p={p.id}>{p.text}</p>)}
                        </section >
                    </div>
                </>
                :
                <NotFound />}
        </>
    )
}

export default ProductView;