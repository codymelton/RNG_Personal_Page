import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

function getPosts () {
  return [
    {id: 'hello-nextjs', title: "Hello Next.js"},
    {id: 'learn-nextjs', title: "Learn Next = Be Awesome"},
    {id: 'deploy-nextjs', title: "Can't Wait to Deploy to Zeit"}
  ]
}

export default () => (
  <Layout>
    <h2> Writing and Rambling </h2>
    <ul>
      {getPosts().map((post) =>(
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <Markdown source={`
      This is the markdown blog post.
      Yes. We can have a [link](/link).
      And we can have a title as well.

      ### This is a title

      And here's the content.
    `} />

    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)
