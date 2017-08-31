import Header from '../components/Header'
import People from '../components/People'
import fetch from 'isomorphic-unfetch'

const Index = ({people}) => (
  <div>
    <Header />
    <p>Star Wars Characters</p>
    <People people={people} />
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://swapi.co/api/people/')
  const data = await res.json()
  const people = data.results

  console.log(`${people.length} characters fetched`)
  return {people}
}

export default Index
