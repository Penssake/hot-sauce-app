import Image from "../components/Image";

const ProductView = ({ id, data }) => {
    const current = data.filter(item => item.id === Number(id));
    const product = current[0].productView;

    return (
        <div className="product-view">
            <section className="product-view__stage">
                <h1>{product.title}</h1>
                <Image srcKey={product.img.src} alt={product.img.alt} classKey="product-view__image" />
            </section>
            <section className="product-view__description">
                <p>{product.description}</p>
            </section >
        </div >
    )
}

export default ProductView;