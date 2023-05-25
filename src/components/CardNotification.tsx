import Image from 'next/image'
import { Notific } from './CardList'
import letterNotification from '../assets/letter-notification.svg'

export function CardNotification({
  key,
  notific,
}: {
  key: number
  notific: Notific
}) {
  return (
    <div key={key} className="flex items-center justify-center p-4">
      <div className="h-[267px] w-[368px] rounded-lg bg-white shadow-lg">
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

          <button className="text-violet-700 hover:text-violet-500">
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
        <div className="px-4 py-2">
          <p className="mb-2 text-sm text-gray-500">{notific.date}</p>

          <p className="mb-4 line-clamp-3 text-sm opacity-60">{notific.text}</p>

          <hr className="my-4 border-gray-300" />
          <div className="flex items-end">
            <button className="my-2 ml-[68px] flex h-[42px] w-[194px] items-center justify-center rounded border-2 border-violet-300 border-opacity-50 text-lg font-bold uppercase text-violet-700 hover:bg-violet-300 hover:text-white hover:opacity-50">
              Ler Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
