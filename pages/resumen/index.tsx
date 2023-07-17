import { MainLayout } from '@/components/layouts';
import React from 'react';

const ResumenPage = () => {
  return (
    <MainLayout
      title="Mr. Rustico - Resumen de la orden"
      description="Resumen de ordenes"
    >
      <h1 className="text-4xl text-white font-bold">Resumen</h1>
      <p className="text-xl text-white my-9">Revisar pedido</p>
    </MainLayout>
  );
};

export default ResumenPage;
