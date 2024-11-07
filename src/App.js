import { Outlet } from 'react-router-dom';
import Header from './containers/header/header';
import { Footer } from './containers/foot/footer';
import { Product } from './containers/product/product';
function App() {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}


export default App;