import Link from 'next/link'
import {getIdFromUrl} from '../helpers/apiHelper'

const People = ({people}) => {
  const peopleList = people.map(person => {
    const id = getIdFromUrl(person.url)

    return (
      <li key={person.url}>
        <Link href={`/character?id=${id}`}>
          <a>{person.name}</a>
        </Link>
      </li>
    )
  })

  return (
    <ul>{peopleList}</ul>
  )
}

export default People
