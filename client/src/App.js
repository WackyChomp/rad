import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { themeSettings } from "theme";    // theme.js

import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Products from "scenes/products";

function App() {

  const mode = useSelector((state) => state.global.mode);     // grabs state in index.js

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])     // mode is passed in theme.js

  return (<div className="app">
    <BrowserRouter>  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to='/dashboard' replace/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

// CssBaseline reset styling

export default App;
