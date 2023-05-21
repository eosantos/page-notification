import Image from 'next/image'
import notificationBell from '../assets/notification-bell.svg'

export function ContentNotific() {
  return (
    <div className="items-center">
      <div className="justify-items-center divide-y divide-black-900 rounded bg-white p-8">
        <h1 className="mb-4 text-2xl font-bold ">Notificações</h1>
        <div className="flex items-center justify-center pt-12">
          <Image
            className="text-black mr-4"
            src={notificationBell}
            alt="Sino de notificação"
          />
          <p className="text-base font-normal opacity-60">
            Você não possui notificações recentes.
          </p>
        </div>
      </div>
    </div>
  )
}
