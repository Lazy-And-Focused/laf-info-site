import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import News from './pages/more/News';
import Achievments from './pages/more/Achievments';
import Info from './pages/more/Info';
import Projects from './pages/more/Projects';

const Main = () => (
	<BrowserRouter basename='/'>
		<Routes>
			<Route path='/' Component={Home}></Route>
			<Route path='/news' Component={News}></Route>
			<Route path='/achievements' Component={Achievments}></Route>
			<Route path='/information' Component={Info}></Route>
			<Route path='/projects' Component={Projects}></Route>
		</Routes>
	</BrowserRouter>
);

export default Main;