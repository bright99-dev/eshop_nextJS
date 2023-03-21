interface PromiseProps {
  status: number;
  data: {
    category: Category;
    products: Product[];
    brands: Brand[];
  };
}

export async function getProductCategory({
  slug,
}: any): Promise<PromiseProps[]> {
  const res = await fetch(
    `https://pacific-depths-48667.herokuapp.com/api/fetch-products/${slug}`
  );
  // if (!res.ok) throw new Error('failed to fetch data')
  const resJson = await res.json();
  return resJson.data.products;
}
