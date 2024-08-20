import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/" element={<Button variant="contained" onClick={toggleTheme} color="primary">Toggle</Button>} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};