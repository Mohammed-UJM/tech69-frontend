export const getProductImages = (productId: number, count: number = 6) => {
  const images: string[] = [];

  for (let i = 1; i <= count; i++) {
    images.push(`/products/${productId}/${productId}-${i}.jpg`);
  }

  return images;
};
