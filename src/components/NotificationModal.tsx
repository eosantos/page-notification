'use client'

import React from 'react'
import { Notific } from './CardList'
import Image from 'next/image'
import letterNotification from '../assets/letter-notification.svg'

export function NotificationModal({
  key,
  notific,
  closeModal,
}: {
  key: number
  notific: Notific
  closeModal: () => void
}) {
  const handleOpenRemoveModal = () => {
    closeModal()
  }

  return (
    <div
      key={key}
      className="bg-black fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-80 p-4 shadow-lg shadow-gray-500/50"
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="w-[368px] max-w-lg rounded-lg bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center align-top">
              <Image
                className="text-black mr-4 align-top"
                src={letterNotification}
                alt="Sino de notificação"
              />

              <h2 className="w-[264px] text-base font-bold opacity-60">
                {notific.title}
              </h2>
            </div>

            <button
              className="items-start text-violet-700 hover:text-violet-500"
              onClick={handleOpenRemoveModal}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <p className="mb-2 py-2 text-sm text-gray-500">{notific.date}</p>

          <p>{notific.text}</p>

          <hr className="my-4 border-gray-300" />
          <button
            className="my-2 ml-[68px] flex h-[42px] w-[194px] items-center justify-center rounded border-2 border-violet-300 border-opacity-50 text-lg font-bold uppercase text-violet-700 hover:bg-violet-300 hover:text-white hover:opacity-50"
            onClick={closeModal}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
