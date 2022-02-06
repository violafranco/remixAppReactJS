import styled from 'styled-components';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ForSketch from './components/ForSketch';
import Pricing from './components/Pricing';
import SignIn from './components/SignIn';

const App = () => {
  return ( 
    <> 
      <ContenedorApp>
        <ContenedorHeader>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/product' element={<Product />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/forsketch' element={<ForSketch />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </ContenedorHeader>

      </ContenedorApp>
    </>
   );
}

const ContenedorApp = styled.div`
  background-color: ${({theme}) => theme.BgPrimary};
`

const ContenedorHeader = styled.div`
  border: none;
`
 
export default App;
