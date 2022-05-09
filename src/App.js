import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import NotFound from './components/NotFound';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Link to='/todos'>Todo</Link>
      <Link to='/albums'>Album</Link>

      <Routes>
        <Route path="/" element={<TodoFeature />} />
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
