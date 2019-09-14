import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger/components/Burger';
import styles from './BurgerBuilder.module.scss';

export default class BurgerBuilder extends Component {
	static propTypes = {
		
	};

	render() {
		return (
			<div className={styles.container}>
				<Burger />
				<div>Burger controls</div>
			</div>
		);
	}
}
