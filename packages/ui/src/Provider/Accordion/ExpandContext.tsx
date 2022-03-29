import * as React from 'react';

export type ExpandContextArgs = { isExpand: boolean; toggleExpand: () => void };

const ExpandContext = React.createContext<ExpandContextArgs | null>(null);

const useExpand = (): ExpandContextArgs => {
  const expandContext = React.useContext(ExpandContext);

  if (expandContext === undefined) {
    throw new Error('useExpand must be used within a <ExpandProvider />');
  }
  return expandContext as ExpandContextArgs;
};

type ExpandProviderProps = {
  children: React.ReactNode;
  defaultExpand?: boolean;
};

const ExpandProvider: React.VFC<ExpandProviderProps> = ({
  children,
  defaultExpand = false,
}) => {
  const [isExpand, setIsExpand] = React.useState(defaultExpand);

  const toggleExpand = React.useCallback(() => {
    setIsExpand(!isExpand);
  }, [isExpand]);

  return (
    <ExpandContext.Provider value={{ isExpand, toggleExpand }}>
      {children}
    </ExpandContext.Provider>
  );
};

export { useExpand, ExpandProvider };
