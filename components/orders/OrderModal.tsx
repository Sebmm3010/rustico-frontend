import { useAppContext } from '@/hooks';

export const OrderModal = () => {
  const { toogleOrderModal, actualOrder } = useAppContext();
  const handleConfirm = () => {
    console.log(actualOrder);
    toogleOrderModal();
  };
  return (
    <div className="h-44 w-64 flex flex-col items-center justify-evenly m-2">
      <h2 className="text-2xl font-bold text-center">
        Desea finalizar la orden?
      </h2>
      <div className="flex gap-5">
        <button
          className="bg-[#ff0000] text-white p-3 rounded-lg shadow-lg"
          onClick={toogleOrderModal}
        >
          Cancelar
        </button>
        <button
          onClick={handleConfirm}
          className="bg-[#16c60c] text-white p-3 rounded-lg shadow-lg"
        >
          Confimar
        </button>
      </div>
    </div>
  );
};
