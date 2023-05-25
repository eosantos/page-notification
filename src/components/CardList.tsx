'use client'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { EmptyList } from './EmptyList'
import { CardNotification } from './CardNotification'
import { Pages } from './Pages'

export interface Notific {
  id: number
  title: string
  date: string
  text: string
}

export function CardList() {
  const [notifics, setNotifics] = useState<Notific[]>([])

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/notifications?_page=1&_limit=6&_sort=date&_order=desc',
      )
      const data = response.data

      setNotifics(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNotific = async (notificationId: number) => {
    try {
      const updatedNotific = notifics.filter(
        (notific) => notific.id !== notificationId,
      )
      setNotifics(updatedNotific)

      await axios.put('db.json', { items: updatedNotific })
    } catch (error) {
      console.error('Erro ao excluir o item:', error)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {notifics.length === 0 ? (
          <EmptyList />
        ) : (
          notifics.map((notific: Notific) => (
            <CardNotification
              key={notific.id}
              notific={notific}
              onDelete={deleteNotific}
            />
          ))
        )}
      </div>
      <Pages />
    </div>
  )
}
