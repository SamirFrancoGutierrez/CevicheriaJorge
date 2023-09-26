import React from 'react';
import { data } from '../data';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
  const onAddProduct = (product) => {
    const existingProduct = allProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setAllProducts(updatedProducts);
      setCountProducts(countProducts + 1); // Incrementa el contador de productos
      setTotal(total + product.price); // Actualiza el total por el precio del producto
    } else {
      const newProduct = { ...product, quantity: 1 };
      setAllProducts([...allProducts, newProduct]);
      setCountProducts(countProducts + 1); // Incrementa el contador de productos
      setTotal(total + newProduct.price); // Actualiza el total por el precio del producto
    }
  };

  const onClearCart = () => {
    setAllProducts([]);
    setCountProducts(0); // Reinicia el contador de productos
    setTotal(0);
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">S/{product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}

      {countProducts > 0 && (
        <button className="btn-clear-all" onClick={onClearCart}>
          Vaciar Carrito
        </button>
      )}
    </div>
  );
};
