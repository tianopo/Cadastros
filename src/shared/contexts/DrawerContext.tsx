import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void;
}

const useAppDrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(useAppDrawerContext);
};

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <useAppDrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </useAppDrawerContext.Provider>
  );
};