import { MainLayout } from '@/components/layouts';
import React from 'react';

const TotalPage = () => {
  return (
    <MainLayout
      title="Mr. Rustico - Confirmar pedido"
      description="Resumen de ordenes"
    >
      <h1 className="text-4xl text-white font-bold">Confirmar y total</h1>
      <p className="text-xl text-white my-9">Confiormar orden</p>
    </MainLayout>
  );
};

export default TotalPage;
