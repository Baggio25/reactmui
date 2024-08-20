import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <div className="App">
          <AppRoutes />
        </div>
      
      </BrowserRouter>
    </AppThemeProvider>

  );
}


