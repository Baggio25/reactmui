import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        icon: 'home',
        path: 'pagina-inicial'
      },
      {
        label: 'Cidades',
        icon: 'form',
        path: 'cidades'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cidades" element={<h1>Cidades</h1>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};