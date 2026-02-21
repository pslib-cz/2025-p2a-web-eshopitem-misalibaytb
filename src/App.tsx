import React from "react";
import '@/assets/styles/app.css'


type Product = {
    name: string;
    price: number;
    description: string;
    rentalPrice: number | null;
    image: string;
    stock: number;
    top: number | null;
    interestPerYear: number | null;
    rating: number;
    reviews: number;
    freeShipping: boolean | null;
    whatHifiBadge?: boolean | null;

}

const RandomTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
]

export class App extends React.Component {

    products: Product[] = []

    generateRandomProducts(num: number = 10): Product[] {
        const products: Product[] = [
            {
                name: "MacBook Air 13\" M4 CZ 2025 Blankytně modrý - s výkupním bonusem 2 500 Kč",
                image: "https://image.alza.cz/products/NL251a2a/NL251a2a.jpg?width=230&height=230",
                description: "MacBook - Apple M4 (10jádrový), 13,6\" IPS lesklý 2560 × 1664 px, RAM 16GB, Apple Apple M4 8jádrová GPU integrovaná grafická karta, SSD 256GB, podsvícená klávesnice, webkamera, čtečka otisků prstů, WiFi 6E, Bluetooth, hmotnost 1, 24 kg, macOS",
                price: 24_990,
                rentalPrice: 575,
                stock: 5,
                top: 1,
                interestPerYear: 4.9,
                rating: 4.8,
                reviews: 32,
                freeShipping: true,
                whatHifiBadge: false,
            },
            {
                name: "Raspberry Pi 5 - 8GB RAM",
                image: "https://image.alza.cz/products/RKpi5r4/RKpi5r4.jpg?width=230&height=230",
                description: "Mini počítač Broadcom BCM2712, VideoCore VideoCore VII, RAM 8GB, Wi-Fi, Micro HDMI, 2× USB 3.2, 2× USB 2.0, bez operačního systému",
                price: 2_779,
                rentalPrice: 128,
                stock: 5,
                top: 2,
                interestPerYear: 4.9,
                rating: 4.8,
                reviews: 41,
                freeShipping: false,
                whatHifiBadge: false,
            },
            {
                name: "Sony Noise Cancelling WH-1000XM6, modrá – Prodloužená záruka zdarma po registraci",
                image: "https://image.alza.cz/products/RO972j0e2/RO972j0e2.jpg?width=230&height=230",
                description: "Bezdrátová sluchátka - s mikrofonem, přes hlavu, okolo uší, aktivní potlačení hluku (ANC), uzavřená konstrukce, 3,5 mm Jack, Bluetooth 5.3, podpora AAC, LDAC, SBC a LC3, Ambient sound, herní režim, Hi-Res audio, hlasový asistent, Multipoint, přepínání skladeb, přijímání hovorů, s ovládáním hlasitosti, sony Sound Connect, frekvenční rozsah 4-40000 Hz, měnič 30 mm, výdrž baterie až 40 h",
                price: 9_989,
                rentalPrice: 230,
                stock: 5,
                top: null,
                interestPerYear: 4.9,
                rating: 4.5,
                reviews: 136,
                freeShipping: false,
                whatHifiBadge: true,
            }
        ];
        for (let i = 0; i < num; i++) {
            products.push({
                name: `Product ${i + 1}`,
                price: parseFloat((Math.random() * 10000).toFixed(0)),
                description: RandomTexts[Math.floor(Math.random() * RandomTexts.length)],
                rentalPrice: Math.random() > 0.5 ? parseFloat((Math.random() * 1000).toFixed(0)) : null,
                image: `https://picsum.photos/seed/${i + 1}/300/200`,
                stock: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : 0,
                top: Math.random() > 0.5 ? parseFloat((Math.random() * 100).toFixed(0)) : null,
                interestPerYear: Math.random() > 0.5 ? parseFloat((Math.random() * 20).toFixed(1)) : null,
                rating: parseFloat((Math.random() * 5).toFixed(1)),
                reviews: Math.floor(Math.random() * 1000),
                freeShipping: Math.random() > 0.5,
                whatHifiBadge: Math.random() > 0.5,
            });
        }
        return products;
    }


    render() {
        if (this.products.length === 0) {
            this.products = this.generateRandomProducts(20);
        }


        return (
            <div className="container">
                {this.products.map((product, index) => (
                    <div key={index} className="product-card">
                        <div className="product-header">
                            <div className="product-tags">
                                {product.top && <span className="product-tag_top">Top {product.top}</span>}
                                {product.whatHifiBadge && (<span className="product-tag_whathifi"><span className="whathifi-star">★</span><span className="whathifi-text">WHAT HI-FI?</span></span>)}
                                {product.interestPerYear &&
                                    <div className="product-tag_interest">
                                        <span className="product-tag_interest-text">Urok</span>
                                        <span className="product-tag_interest-text">{product.interestPerYear}<span>%</span></span>
                                        <span className="product-tag_interest-text">p. a.</span>
                                    </div>
                                }
                            </div>
                            {product.freeShipping && <div className="product-badge_free-shipping"><span className="product-badge_free-shipping-text">doruceni zdarma<br />alzaboxy i prodejny</span></div>}
                            <a href="#">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </a>
                        </div>
                        <div className="product-body">
                            <div className="product-rating">
                                <a href="#" className="product-rating-stars-wrapper">
                                    <span className="product-rating-stars" style={{ width: product.rating / 5 * 100 + "%" }}>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </span>
                                </a>
                                <span className="product-rating-value">{product.rating} <small>{product.reviews}x</small></span>
                                <a href="#" className="product-compare"><i className="fa-solid fa-scale-balanced"></i></a>
                                <a href="#" className="product-wishlist"><i className="fa-solid fa-heart"></i></a>
                            </div>
                            <a href="#" className="product-name">{product.name}</a>
                            <p className="product-description">{product.description}</p>
                        </div>
                        <div className="product-footer">
                            <div className="product-row">
                                <div className="product-price">
                                    <span className="product-price-once">{product.price},- Kč</span>
                                    {product.rentalPrice && <span className="product-price-rental">Od {product.rentalPrice},- Kč / mesicne</span>}
                                </div>
                                <button className="product-button">Přidat do košíku</button>
                            </div>
                            <span className="product-stock center">{product.stock > 0 ? `Skladem > ${product.stock} ks` : "Není skladem"}</span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}