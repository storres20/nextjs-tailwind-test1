import { Character } from '@/types'
import React from 'react'
import Image from 'next/image'
import imageLoader from '@/imageLoader'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function CharacterPage({character}:{character: Character}) {
  const router = useRouter()
  console.log(router.query)
  
  return (
    <div>
      <h1>{character.name}</h1>
      
      <Image loader={imageLoader} unoptimized src={character.image} alt={character.name} width={200} height={200} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
  const character = await res.json()
  
  return {
    props: {character}
  }
}