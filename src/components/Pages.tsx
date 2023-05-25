import router from 'next/router'

export function Pages() {
  return (
    <div className="flex flex-wrap justify-center">
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
  )
}
