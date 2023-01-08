import { useState, useMemo } from 'react';
import { Outlet } from 'react-router';
import { searchingContext } from './hooks/SearchContext';
import { searchValueContext } from './hooks/SearchContext';
import TopBar from './components/topBar/TopBar';
import './styles/main.css'
const App = () => {

  const [searching, setSearching] = useState(false);
  const provideSearchingContext = useMemo(() => ({ searching, setSearching }), [searching, setSearching]);

  const [searchValue, setSearchValue] = useState("")
  const privideSearchValueContext = useMemo(() => ({ searchValue, setSearchValue }), [searchValue, setSearchValue]);

  return (
    <searchingContext.Provider value={provideSearchingContext}>
      <searchValueContext.Provider value={privideSearchValueContext}>
        <div className='main-container'>
          <TopBar />
          <div className='division'></div>
          <Outlet />
        </div>
      </searchValueContext.Provider>
    </searchingContext.Provider>

  );
}

export default App;
