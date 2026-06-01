export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (src.startsWith("http")) return src;
  return `${basePath}${src}`;
}
