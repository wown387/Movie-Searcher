import { createContext, useContext, useState } from "react";
import { MovieType } from "../types/movie";
const searchContext = createContext({
  movies: [] as Array<MovieType>,
  setMovies: {} as React.Dispatch<React.SetStateAction<Array<MovieType>>>,
});

const SearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [movies, setMovies] = useState([] as Array<MovieType>);

  return (
    <searchContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

const useSearchContext = () => useContext(searchContext);

export { SearchProvider, useSearchContext };
