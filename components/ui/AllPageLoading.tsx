export const AllPageLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <span className="loader"></span>
      <p className="text-xl text-white font-bold loaderText">
        Cargando informacion
      </p>
    </div>
  );
};
