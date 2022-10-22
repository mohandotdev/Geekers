import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Content from './components/dashboard/Content';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';
import Ch1 from './components/challenges/page1/ch1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/page1/ch1" element={<Ch1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;