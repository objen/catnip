import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {

  return (
  <section className='bg-pink text-blue-dark font-body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          {/* High Scores?
          How to play
          credits */}
        </Routes>
      </BrowserRouter>
  </section>

  )
}

export default App
