import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './components/Ingredient/Ingredient';
import styles from './Burger.module.scss';

const Burger = (props) => {
	const ingredients = Object.keys(props.ingredients)
		.map((key) => {
			return [ ...Array(props.ingredients[key]) ].map((_, index) => {
				return <Ingredient key={key + index} type={key} />;
			});
		})
		.flat();
	return (
		<div className={styles.burger}>
			<Ingredient type={'bread-top'} />
			{ingredients.length === 0 ? <p>Please start adding ingredients !</p> : ingredients}
			<Ingredient type={'bread-bottom'} />
		</div>
	);
};

Burger.propTypes = {};

export default Burger;
