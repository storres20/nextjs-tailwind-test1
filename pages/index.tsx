import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { Character, GetCharacterResults } from '@/types'
import imageLoader from '@/imageLoader'
import Link from 'next/link'

const Home: NextPage<{characters: Character[]}> = ({characters}) => {
  return (
    <>
      <h1 className="text-5xl py-8 font-bold underline text-center text-red-400">
        Hello world!
      </h1>
      
      <div className='grid gap-4 grid-cols-2 px-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4'>
      {
        characters.map((character:any) => {
          return <div key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <h2 className='text-2xl text-center hover:text-red-400'>{character.name}</h2>
            </Link>
            
            <Image loader={imageLoader} unoptimized src={character.image} alt={character.name} width={200} height={200} className='mx-auto rounded-full' />
          </div>
        })
      }
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const {results}: GetCharacterResults = await res.json()
  
  return {
    props: {
      characters: results,
    },
  }
}

export default Home;