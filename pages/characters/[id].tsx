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
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl text-red-400 pb-4'>{character.name}</h1>
      
      <Image loader={imageLoader} unoptimized src={character.image} alt={character.name} width={200} height={200} className='rounded-full' />
      
      <span>Status: {character.status}</span>
      <span>Specie: {character.species}</span>
      <span>Gender: {character.gender}</span>
      <span>Origin: {character.origin.name}</span>
      <span>Location: {character.location.name}</span>
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