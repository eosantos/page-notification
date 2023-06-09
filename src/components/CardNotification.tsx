import Image from 'next/image'
import { Notific } from './CardList'
import letterNotification from '../assets/letter-notification.svg'
import { useState } from 'react'
import { RemoveModal } from './RemoveModal'
import { NotificationModal } from './NotificationModal'

export function CardNotification({
  key,
  notific,
  onDelete,
}: {
  key: number
  notific: Notific
  onDelete: (notificId: number) => void
}) {
  const [isNotificModalOpen, setIsNotificModalOpen] = useState(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
  console.log(key)

  const handleOpenNotificModal = () => {
    setIsNotificModalOpen(true)
  }

  const handleCloseNotificModal = () => {
    setIsNotificModalOpen(false)
  }

  const handleOpenRemoveModal = () => {
    setIsRemoveModalOpen(true)
  }

  const handleCloseRemoveModal = () => {
    setIsRemoveModalOpen(false)
  }

  return (
    <>
      {isNotificModalOpen && (
        <NotificationModal
          key={key}
          notific={notific}
          closeModal={handleCloseNotificModal}
        />
      )}
      {isRemoveModalOpen && (
        <RemoveModal
          key={key}
          notific={notific}
          closeModal={handleCloseRemoveModal}
          onDelete={onDelete}
        />
      )}

      <div key={key} className="p-4">
        <div className="h-[267px] w-[368px] rounded-lg bg-white pt-2 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-start align-top">
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
              className="items-start text-violet-700  hover:text-violet-500"
              onClick={handleOpenRemoveModal}
            >
              <svg
                className="h-6 w-6  items-start"
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
          <div className="px-4 py-2">
            <p className="mb-2 text-sm text-gray-500">{notific.date}</p>

            <p className="mb-4 line-clamp-3 text-sm opacity-60">
              {notific.text}
            </p>

            <hr className="my-4 border-gray-300" />
            <div className="flex items-end">
              <button
                className="my-2 ml-[68px] flex h-[42px] w-[194px] items-center justify-center rounded border-2 border-violet-300 border-opacity-50 text-lg font-bold uppercase text-violet-700 hover:bg-violet-300 hover:text-white hover:opacity-50"
                onClick={handleOpenNotificModal}
              >
                Ler Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
