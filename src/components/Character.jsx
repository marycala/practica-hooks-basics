import { useEffect, useState } from 'react'
import React from 'react'
import './Character.css'

const Character = () => {
  const [characters, setCharacters] = useState([])
  const [rotated, setRotated] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results)
      })
  }, [])

  const handleRotate = (id) => {
    setRotated((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }))
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <img
            className='character'
            alt={character.name}
            src={character.image}
            onClick={() => handleRotate(character.id)}
            style={{
              transform: rotated[character.id]
                ? 'rotate(180deg)'
                : 'rotate(0deg)',
              transition: 'transform 0.5s ease'
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export default Character
