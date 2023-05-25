'use client'
import { useEffect, useState } from 'react'

import axios from 'axios'
import router from 'next/router'
import { EmptyList } from './EmptyList'
import { CardNotification } from './CardNotification'

export interface Notific {
  id: number
  title: string
  date: string
  text: string
}

export function CardList() {
  const [notifics, setNotifics] = useState([])

  const getPosts = async () => {
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

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="flex flex-wrap justify-center">
      <div>
        {notifics.length === 0 ? (
          <EmptyList />
        ) : (
          notifics.map((notific: Notific) => (
            <CardNotification key={notific.id} notific={notific} />
          ))
        )}
      </div>
      <div className="justify flex items-end">
        {Array(5)
          .fill('')
          .map((_, index) => {
            return (
              <button
                className="hover:opacity-0.1 hover:text-gray bg-gray my-2 ml-[40px] flex h-[40px] w-[40px] items-center
                justify-center rounded text-violet-700 hover:bg-gray-300"
                key={index}
                onClick={() => router.push('index + 1')}
              >
                {index + 1}
              </button>
            )
          })}
      </div>
    </div>
  )
}
