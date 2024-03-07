import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vote from './Vote';
import Results from './Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vote />} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
