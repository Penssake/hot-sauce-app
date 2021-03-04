const ProductView = ({ id, data }) => {
    const current = data.filter(item => item.id === Number(id));
    return (
        <>
            <h1>{current[0].title}</h1>
        </>
    )
}

export default ProductView;