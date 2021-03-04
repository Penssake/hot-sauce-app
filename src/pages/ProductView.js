import Image from "../components/Image";
import Button from "../components/Button";

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
                <h3>{product.description}</h3>
                <Button href="/" icon="home" classKey="product-view__home" link={true} />
            </section >
        </div >
    )
}

export default ProductView;