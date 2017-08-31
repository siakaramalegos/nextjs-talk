import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a style={{marginRight: 10}}>Home</a>
    </Link>
    <Link prefetch href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Header
