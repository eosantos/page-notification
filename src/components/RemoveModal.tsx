'use client'

import React from 'react'
import Image from 'next/image'
import alertReportProblem from '../assets/alert-report-problem.svg'
import { Notific } from './CardList'

export function RemoveModal({
  notific,
  closeModal,
}: {
  notific: Notific
  closeModal: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-center">
          <Image
            className="text-black mr-4 align-top"
            src={alertReportProblem}
            alt="Alerta"
          />
        </div>
        <h2 className="flex items-center justify-center text-xl font-bold">
          Excluir mensagem
        </h2>
        <p className="mb-4 flex items-center justify-center text-gray-700">
          Deseja realmente excluir a mensagem?
        </p>
        <div className="flex items-center justify-center">
          <button
            className="mr-2 h-[42px] w-[202px] rounded border-2 border-violet-300 border-opacity-50 px-4 py-2 font-medium
                hover:bg-violet-300  hover:text-white hover:opacity-50"
            onClick={closeModal}
          >
            Não
          </button>
          <button
            className="mr-2 h-[42px] w-[202px] rounded bg-red-900 px-4 py-2 font-medium text-white hover:bg-red-700
                hover:text-white  "
            onClick={closeModal}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}
