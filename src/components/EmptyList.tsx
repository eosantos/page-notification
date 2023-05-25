import Image from 'next/image'
import notificationBell from '../assets/notification-bell.svg'

export function EmptyList() {
  return (
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
  )
}
