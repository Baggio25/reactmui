import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/" element={<Button variant="contained" onClick={toggleDrawerOpen} color="primary">Toggle Drawer</Button>} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};