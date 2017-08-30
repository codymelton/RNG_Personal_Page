import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/writings`} href={`/post?title=${props.title}`}>
      <a> {props.title} </a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h2> Writing and Rambling </h2>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next = Be Awesome" />
      <PostLink title="Can't Wait to Deploy to Zeit" />
    </ul>
  </Layout>
)
