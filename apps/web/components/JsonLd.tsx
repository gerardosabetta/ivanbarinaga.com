import { Blog, WithContext } from 'schema-dts'

export default function JsonLd({ data }: { data: WithContext<Blog> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

