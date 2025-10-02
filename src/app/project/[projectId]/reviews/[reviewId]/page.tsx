// app/products/[productId]/reviews/[reviewId]/page.tsx
export default async function ReviewId({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) {
  // ✅ Await the promise before using
  const { productId, reviewId } = await params;

  return (
    <h2>
      Review {reviewId} of the Product: {productId}
    </h2>
  );
}
