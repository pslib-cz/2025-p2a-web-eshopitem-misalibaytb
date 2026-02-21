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
        const products: Product[] = [];
        for (let i = 0; i < num; i++) {
            products.push({
                name: `Product ${i + 1}`,
                price: parseFloat((Math.random() * 10000).toFixed(2)),
                description: RandomTexts[Math.floor(Math.random() * RandomTexts.length)],
                rentalPrice: Math.random() > 0.5 ? parseFloat((Math.random() * 1000).toFixed(2)) : null,
                image: `https://picsum.photos/seed/${i + 1}/300/200`,
                stock: Math.floor(Math.random() * 100),
                top: Math.random() > 0.5 ? parseFloat((Math.random() * 100).toFixed(2)) : null,
                interestPerYear: Math.random() > 0.5 ? parseFloat((Math.random() * 20).toFixed(2)) : null,
                rating: parseFloat((Math.random() * 5).toFixed(1)),
                reviews: Math.floor(Math.random() * 1000),
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
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Price: ${product.price}</p>
                        {product.rentalPrice && <p className="product-rental-price">Rental Price: ${product.rentalPrice}</p>}
                        {product.top && <p className="product-top">Top: ${product.top}</p>}
                        {product.interestPerYear && <p className="product-interest">Interest/Year: {product.interestPerYear}%</p>}
                        <p className="product-stock">Stock: {product.stock}</p>
                        <p className="product-rating">Rating: {product.rating} ({product.reviews} reviews)</p>
                    </div>
                ))}
            </div>
        )
    }

}