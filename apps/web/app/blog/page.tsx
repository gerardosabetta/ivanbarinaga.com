import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const metadata = {
  title: "Blog - Ivan Barinaga Psicólogo",
  description:
    "Artículos sobre salud mental, terapia cognitivo-conductual y bienestar emocional por Ivan Barinaga.",
};

async function getPosts(page = 1, pageSize = 10) {
  const skip = (page - 1) * pageSize;
  const query = groq`
    *[_type == "post"] | order(publishedAt desc) [${skip}...${skip + pageSize}] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }
  `;
  return client.fetch(query);
}

async function getTotalPosts() {
  const query = groq`count(*[_type == "post"])`;
  return client.fetch(query);
}

export default async function BlogPage({ searchParams }: any) {
  const { page } = await searchParams;
  const pageNumber = Number(page) || 1;
  const pageSize = 10;
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / pageSize);
  const posts = await getPosts(pageNumber, pageSize);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div
            key={post.slug.current}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${post.slug.current}`}>
              {post.mainImage && (
                <div className="relative h-48">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {new Date(post.publishedAt).toLocaleDateString("es-AR")}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  Leer más →
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        {pageNumber > 1 ? (
          <Link
            href={`?page=${pageNumber - 1}`}
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            ← Anterior
          </Link>
        ) : (
          <div></div>
        )}
        {pageNumber < totalPages ? (
          <Link
            href={`?page=${pageNumber + 1}`}
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Siguiente →
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
