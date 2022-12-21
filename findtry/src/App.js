import { Outlet } from 'react-router';
const App = () => {
  const eevi = "my love"
  return (
    <Outlet prop={eevi} />
  );
}

export default App;
