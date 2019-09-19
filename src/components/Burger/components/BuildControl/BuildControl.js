import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.scss';
import cn from 'classnames';

const BuildControl = (props) => {
	return (
		<div className={styles.buildControl}>
			<div className={styles.label}>{props.label}</div>
			<button className={cn(styles.btn, styles.more)} onClick={props.removed}>Less</button>
			<button className={cn(styles.btn, styles.less)} onClick={props.added}>More</button>
		</div>
	);
};

BuildControl.propTypes = {
	label: PropTypes.string
};

export default BuildControl;
