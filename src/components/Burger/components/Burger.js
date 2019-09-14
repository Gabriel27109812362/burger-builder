import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import styles from '../styles/Burger.module.scss';

export default class Burger extends Component {
	static propTypes = {
		// prop: PropTypes
	};

	render() {
		return (
			<div className={styles.burger}>
				<Ingredient type={"bread-top"} />
				<Ingredient type={"salad"} />
				<Ingredient type={"meat"} />
				<Ingredient type={"cheese"} />
				<Ingredient type={"bacon"} />
                <Ingredient type={'bread-bottom'} />
			</div>
		);
	}
}
