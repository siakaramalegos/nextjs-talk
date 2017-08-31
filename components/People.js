const People = ({people}) => {
  const peopleList = people.map(person => (
    <li key={person.url}>{person.name}</li>
  ))

  return (
    <ul>{peopleList}</ul>
  )
}

export default People
