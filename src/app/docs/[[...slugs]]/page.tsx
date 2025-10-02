// app/docs/[[...slugs]]/page.tsx
export default async function Docs({
  params,
}: {
  params: Promise<{ slugs?: string[] }>; // 👈 params is a Promise
}) {
  const { slugs = [] } = await params;   // 👈 await it

  if (slugs.length === 2) {
    return <h1>Sample doc {slugs[1]} page {slugs[0]}</h1>;
  }

  return <h1>Home Docs</h1>;
}
