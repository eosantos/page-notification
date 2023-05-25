import router from 'next/router'

export function PageNumbers({
  totalPages,
  onPageSelect,
}: {
  totalPages: number
  onPageSelect: (page: number) => void
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(totalPages)
        .fill('')
        .map((_, index) => {
          return (
            <button
              className="hover:opacity-0.1 hover:text-gray bg-gray my-2 ml-[40px] flex h-[40px] w-[40px] items-center
          justify-center rounded text-violet-700 hover:bg-gray-300"
              key={index}
              onClick={() => onPageSelect(index + 1)}
            >
              {index + 1}
            </button>
          )
        })}
    </div>
  )
}
