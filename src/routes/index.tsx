import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";

import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        icon: 'home',
        path: 'pagina-inicial'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" onClick={toggleDrawerOpen} color="primary">Toggle Drawer</Button>} />
      
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};