'use client'

import React from 'react'
import { Notific } from './CardList'

export function NotificationModal({
  notific,
  closeModal,
}: {
  notific: Notific
  closeModal: () => void
}) {
  return (
    <div className="bg-black fixed inset-0 z-10 flex items-center justify-center bg-opacity-50">
      <div className="max-w-lg bg-white p-4">
        <h2 className="mb-2 text-lg font-bold">{notific.title}</h2>
        <p>{notific.text}</p>
        <button
          className="mt-2 text-blue-500 underline hover:text-blue-700 focus:outline-none"
          onClick={closeModal}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
