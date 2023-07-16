export const ProgressBar = () => {
  const links = [
    { id: 1, titulo: 'Menú', url: '/' },
    { id: 2, titulo: 'Resumen', url: '/resumen' },
    { id: 3, titulo: 'Confirmar compra', url: '/total' }
  ];
  return (
    <>
      <div className="text-white relative top-14 flex justify-between mx-12 mb-10">
        {links.map((link) => (
          <button className="text-2xl font-bold" key={link.id}>
            {link.titulo}
          </button>
        ))}
      </div>
    </>
  );
};
