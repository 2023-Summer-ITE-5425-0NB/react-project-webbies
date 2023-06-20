import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";
import Home from './components/Home';
import Booking from './components/Booking';
import CurrencyConverter from './components/CurrencyConverter';
import UserGeneratedContentList from './components/UserGeneratedContentList';
import UserSubmissionForm from './components/UserSubmissionForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translations from './components/translations';
import Language from './components/Language';

enum AuthStatus {
  NOT_AUTHENTICATED,
  AUTHENTICATED,
}

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>(
    AuthStatus.NOT_AUTHENTICATED
  );

  const handleLogin = () => {
    // Perform authentication logic here
    // If authentication is successful, update authStatus to AuthStatus.AUTHENTICATED
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Update authStatus to AuthStatus.NOT_AUTHENTICATED
  };

  React.useEffect(() => {
    i18next
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: translations,
        fallbackLng: 'en',
        debug: true,
      });
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <Router>
        <div className="app">
          <Dashboard />
          <div className="content">
            <Routes>
              <Route path="/" element={<Booking />} />
              <Route path="/currency-converter" element={<CurrencyConverter />} />
              <Route path="/language" element={<Language />} />
              <Route path="/userGeneratedContentList" element={<UserGeneratedContentList />} />
              <Route path="/userSubmissionForm" element={<UserSubmissionForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
