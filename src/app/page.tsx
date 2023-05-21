import { CardNotific } from '@/components/CardNotific'
import { ContentNotific } from '@/components/ContentNotific'
import { Header } from '@/components/Header'
import { ModalConfirm } from '@/components/ModalConfirm'
import React from 'react'

export default function Home() {
  return (
    <main className="w-full items-center">
      <Header />
      <ContentNotific />
      <CardNotific />
      <ModalConfirm />
    </main>
  )
}
