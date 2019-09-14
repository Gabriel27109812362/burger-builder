import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Ingredient.module.scss';

const Ingredient = (props) => {
	let ingredient = null;
	switch (props.type) {
		case 'bread-bottom':
			ingredient = <div className={styles.breadBottom} />;
			break;
		case 'bread-top':
			ingredient = (
				<div className={styles.breadTop}>
					<div className={styles.seedsOne} />
					<div className={styles.seedsSecond} />
				</div>
			);
			break;
		case 'meat':
			ingredient = <div className={styles.meat} />;
			break;
		case 'cheese':
			ingredient = <div className={styles.cheese} />;
			break;
		case 'salad':
			ingredient = <div className={styles.salad} />;
			break;
		case 'bacon':
			ingredient = <div className={styles.bacon} />;
			break;
		default:
			ingredient = null;
			break;
	}

	return ingredient;
};

Ingredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default Ingredient;
