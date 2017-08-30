import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navigation = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}> Home </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}> About </a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}> Projects </a>
    </Link>
    <Link href="/writing">
      <a style={linkStyle}> Writing </a>
    </Link>
    <Link href="/presentations">
      <a style={linkStyle}> Presentations </a>
    </Link>
  </div>
)

export default Navigation
