import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Bookcase } from "./Bookcase";

export const LanguageContext = createContext("");
export const TestContext = createContext("");

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setTimeout(() => {
      setLanguage("sv");
    }, 3000);
  }, []);

  return (
    <LanguageContext.Provider value={language}>
      <TestContext.Provider value={"Två olika kontext är inga problem"}>
        <div className="App">
          <h1>App</h1>
          <Bookcase></Bookcase>
        </div>
      </TestContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
