type Product = {
  title: string;
  grade: number;
  price: number;
}

export async function getAllProducts(): Promise<Product[]> {
  const productList: Product[] = await fetch('http://localhost:7000/products')
    .then(data => data.json())

  return productList
}