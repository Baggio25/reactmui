import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { Dashboard, ListagemDePessoas } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página Inicial',
        path: '/pagina-inicial'
      },
      {
        icon: 'people',
        label: 'Pessoas',
        path: '/pessoas'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route index element={<Navigate to="/pagina-inicial" />} />
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:pessoaId" element={<p>Detalhe</p>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};