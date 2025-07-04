import './styles/ProductCard.css';

export default function ProductCard() {
    return (
        <section className="productCard">
            <img src="/src/assets/images/image-product-desktop.jpg" alt="Product image" />
            <article className="productCard_info">
                <span>Perfume</span>
            </article>
        </section>
    );
}

