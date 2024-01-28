import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {

    return (

      <div className='app'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </div>

    )

}

export default App;
