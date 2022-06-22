import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="Give our shop"
        image={headerImage}>
        You want look of interest book for yourself 
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;