import 'swiper/swiper.min.css';
import './App.scss';
import {BrowserRouter ,Route} from 'react-router-dom';
import { Footer, Header } from './components';

import Routes from './config/Routes';

function App() {
	return (
		<BrowserRouter>
			<Route  render = {props =>(
				<>
					<Header {...props}/>
					<Routes />
					<Footer />
				</>
			)} />
		</BrowserRouter>
	);
}

export default App;
