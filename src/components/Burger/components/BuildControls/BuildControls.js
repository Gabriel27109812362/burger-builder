import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.scss';
import BuildControl from '../BuildControl/BuildControl';

const BuildControls = (props) => {
	const controls = [
		{ label: 'Salad', type: 'salad' },
		{ label: 'Bacon', type: 'bacon' },
		{ label: 'Cheese', type: 'cheese' },
		{ label: 'Meat', type: 'meat' }
	];

	return (
		<div className={styles.buildControls}>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						key={ctrl.label}
						label={ctrl.label}
						added={() => props.ingredientAdded(ctrl.type)}
						removed={() => props.ingredientRemoved(ctrl.type)}
					/>
				);
			})}
		</div>
	);
};

BuildControls.propTypes = {};

export default BuildControls;
