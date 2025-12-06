import { HashRouter, Route, Routes } from 'react-router-dom';
import Clients from './pages/clients';
import Counter from './pages/counter';
import JsonPage from './pages/json';
import TaskTable from './pages/taskTable';
import Test from './pages/test';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/tasktable" element={<TaskTable />} />
        <Route path="/json" element={<JsonPage />} />
        <Route path="/" element={<div>Accueil</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
