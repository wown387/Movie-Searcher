import { createContext, useContext, useState } from "react";
import { MovieType } from "../types/movie";
const searchContext = createContext({
  loading: true,
  setLoading: {} as React.Dispatch<React.SetStateAction<boolean>>,
  movies: [] as Array<MovieType>,
  setMovies: {} as React.Dispatch<React.SetStateAction<Array<MovieType>>>,
  errorMessage: null,
  setErrorMessage: {} as React.Dispatch<React.SetStateAction<null>>,
});

const SearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([] as Array<MovieType>);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <searchContext.Provider
      value={{
        loading,
        setLoading,
        movies,
        setMovies,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

const useSearchContext = () => useContext(searchContext);

export { SearchProvider, useSearchContext };
