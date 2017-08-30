import Layout from '../components/MyLayout'

const Content = (props) => (
  <div>
    <h2> { props.url.query.title } </h2>
    <p>This is the blog post content.</p>
  </div>
)

export default (props) => (
  <Layout>
    <Content url={ props.url } />
  </Layout>
)
