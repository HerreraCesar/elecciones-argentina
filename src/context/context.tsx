import { JSX, createContext, createSignal, useContext } from 'solid-js';

interface ApplicationProviderProps {
  children: JSX.Element;
}

const ApplicationContext = createContext();

export function ApplicationProvider(props: ApplicationProviderProps) {
  const [theme, setTheme] = createSignal<string>('dark');
  const [language, setLanguage] = createSignal<string>('es');
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [showAccesories, setShowAccesories] = createSignal(false);
  const [elements, setElements] = createSignal<Element[]>([]);

  const store = {
    theme: [
      theme,
      {
        changeTheme(theme: string) {
          setTheme(() => theme);
        },
      },
    ],
    language: [
      language,
      {
        changeLanguage(language: string) {
          setLanguage(() => language);
        },
      },
    ],
    menuOpen: [
      menuOpen,
      {
        setMenuOpen(state: boolean) {
          setMenuOpen(() => state);
        },
      },
    ],
    showAccesories: [
      showAccesories,
      {
        setShowAccesories(state: boolean) {
          setShowAccesories(() => state);
        },
      },
    ],
    elements: [
      elements,
      {
        addElement(payload: Element) {
          setElements((prev) => [...prev, payload]);
        },
      },
    ],
  };

  return (
    <ApplicationContext.Provider value={store}>
      {props.children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  return useContext<any>(ApplicationContext);
}
