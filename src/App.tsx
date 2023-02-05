import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Topbar } from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./scenes/dashboard/Dashboard";
import { Sidebar } from "./scenes/global/Sidebar";
import { Team } from "./scenes/team/Team";
import { Contacts } from "./scenes/contacts/Contacts";
import { Invoices } from "./scenes/invoices/Invoices";
import { Form } from "./scenes/form/Form";
import { Calendar } from "./scenes/calendar/Calendar";
import { FAQ } from "./scenes/faq/FAQ";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      value={colorMode as { toggleColorMode: () => void }}
    >
      <ThemeProvider
        theme={theme as Partial<Theme> | ((outerTheme: Theme) => Theme)}
      >
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className={"content"}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
