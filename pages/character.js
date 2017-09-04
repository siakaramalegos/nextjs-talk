import fetch from 'isomorphic-unfetch'
import Header from '../components/Header'

const Character = ({person, homeworld}) => (
  <div>
    <Header />
    <p>{person.name}</p>
    <ul>
      <li>Home planet: {homeworld.name}</li>
      <li>Birth year: {person.birth_year}</li>
    </ul>
  </div>
)

Character.getInitialProps = async function({query}) {
  const personResponse = await fetch(`https://swapi.co/api/people/${query.id}`)
  const person = await personResponse.json()
  const homeworldResponse = await fetch(person.homeworld)
  const homeworld = await homeworldResponse.json()

  return {person, homeworld}
}

export default Character
