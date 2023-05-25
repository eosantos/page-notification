import { useState } from 'react';

export function ModalNewCard = ({ title, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="line-clamp-3">{text}</p>
      {text.length > 100 && (
        <button
          className="mt-2 text-blue-500 hover:text-blue-700 underline focus:outline-none"
          onClick={handleOpenModal}
        >
          Leia mais
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-4 max-w-lg">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p>{text}</p>
            <button
              className="mt-2 text-blue-500 hover:text-blue-700 underline focus:outline-none"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
