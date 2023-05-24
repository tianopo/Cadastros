import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption{
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

const useAppDrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(useAppDrawerContext);
};

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <useAppDrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </useAppDrawerContext.Provider>
  );
};