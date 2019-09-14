import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';

const App = () => {
	return (
		<div>
			<Layout>
				<BurgerBuilder />
			</Layout>
		</div>
	);
};

export default App;
