import './styles/ProductCard.css';
import iconCart from '../assets/images/icon-cart.svg';

export default function ProductCard() {
    return (
        <section className="productCard">
            <img src="/src/assets/images/image-product-desktop.jpg" alt="Product image" />
            <article className="productCard_info">
                <span className='productCard_info_header'>Perfume</span>
                <h1 className='productCard_info_title'>Gabrielle Essence Eau De Parfum</h1>
                <p className='productCard_info_text'>A floral, solar and voluptuous interpretation composed by <br /> Oliver Polge, Perfumer-Creater for the House of CHANEL.</p>
                <section className='productCard_info_price'>
                    <h2 className='price_main'>$149.99</h2>
                    <span className='price_crossed'>$169.99</span>
                </section>
                <button className='productCard_btn'>
                    <img src={iconCart} alt="Cart icon" style={{marginRight: '8px', verticalAlign: 'middle'}} />
                    Add to Cart
                </button>
            </article>
        </section>
    );
}

