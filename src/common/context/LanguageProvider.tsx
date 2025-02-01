"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { IntlProvider } from "next-intl";

// Context type for language state and the language switching function
interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (newLanguage: string, saveToLocalStorage: boolean) => void;
}

// Create a context for managing language
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

// Language provider component to manage and provide language settings
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en"); // Default language
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  // Load the initial language setting from localStorage
  useEffect(() => {
    const loadInitialLanguage = async () => {
      const storedLanguage = localStorage.getItem("locale") ?? "en";
      await changeLanguage(storedLanguage, false); // Load messages without saving to localStorage
    };

    loadInitialLanguage();
  }, []);

  // Function to change the language and update messages
  const changeLanguage = async (
    newLanguage: string,
    saveToLocalStorage = false,
  ) => {
    try {
      // Dynamically import the locale messages for the new language
      const loadedMessages = (
        await import(`@surebank/common/i18n/locale/${newLanguage}.json`)
      ).default;

      // Update the state with the new language and messages
      setCurrentLanguage(newLanguage);
      setMessages(loadedMessages);

      // Optionally save the new language to localStorage
      if (saveToLocalStorage) {
        localStorage.setItem("locale", newLanguage);
      }
    } catch (error) {
      console.error("Error loading locale messages:", error);
    }
  };

  // If messages are not loaded, render nothing until the data is ready
  if (!messages) {
    return null;
  }

  return (
    // Provide the current language and the change language function to the app
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      <IntlProvider locale={currentLanguage} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

// Custom hook to access the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
