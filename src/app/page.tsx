import { CardList } from '@/components/CardList'
import { Title } from '@/components/Title'
import { Header } from '@/components/Header'
import React from 'react'

export default function Home() {
  return (
    <main className="w-full items-center">
      <Header />
      <Title />
      <CardList />
    </main>
  )
}
