import ProductGrid from "@/components/product-grid";
import axios from "axios";

export default async function ProductsPage() {
  let products = [];

  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    if (response.data) {
      products = response.data;
    }
  } catch (error) {
    console.error("Error en el fetch:", error);
  }

  const hasProducts = products && products.length > 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Todos los Productos</h1>
      {hasProducts ? (
        <ProductGrid products={products} />
      ) : (
        <h2 className="text-gray-500">No hay productos disponibles.</h2>
      )}
    </div>
  );
}
