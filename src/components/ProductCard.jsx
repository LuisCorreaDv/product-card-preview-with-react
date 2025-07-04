import './styles/ProductCard.css';

export default function ProductCard() {
    return (
        <section className="productCard">
            <img src="/src/assets/images/image-product-desktop.jpg" alt="Product image" />
            <article className="productCard_info">
                <span className='productCard_info_header'>Perfume</span>
                <h1 className='productCard_info_title'>Gabrielle Essence Eau De Parfum</h1>
                <p className='productCard_info_text'>A floral, solar and voluptuous interpretation composed by <br /> Oliver Polge, Perfumer-Creater for the House of CHANEL.</p>
            </article>
        </section>
    );
}

