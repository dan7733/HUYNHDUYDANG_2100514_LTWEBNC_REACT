import { Outlet } from 'react-router-dom';
import Header from './containers/header/header';
import { Footer } from './containers/foot/footer';
import { ContextProvider } from './containers/header/Context'; 
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import store from './redux/store'; // Import store từ Redux

function App() {
  return (
    <Provider store={store}> {/* Bọc ứng dụng với Provider */}
      <ContextProvider>
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
      </ContextProvider>
    </Provider>
  );
}

export default App;
