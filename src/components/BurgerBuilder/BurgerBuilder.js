import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger/Burger';
import styles from './BurgerBuilder.module.scss';
import BuildControls from '../Burger/components/BuildControls/BuildControls';
import { INGREDIENT_PRICES } from '../../global/consts';

export default class BurgerBuilder extends Component {
	static propTypes = {};

	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 1,
			meat: 1
		},
		totalPrice: 4
	};

	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = (type) => {
		if (this.state.ingredients[type] !== 0) {
			const updatedCount = this.state.ingredients[type] - 1;
			const updatedIngredients = { ...this.state.ingredients };
			updatedIngredients[type] = updatedCount;
			const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
			this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
		}
	};

	render() {
		return (
			<div className={styles.container}>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
				/>
			</div>
		);
	}
}
