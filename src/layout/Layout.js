import React from 'react';
import styles from './layout.module.scss';

const Layout = (props) => {
	return (
		<div>
			<div>Toolbar,SideDrawer,Backdrop</div>
			<main className={styles.content}>{props.children}</main>
		</div>
	);
};

export default Layout;
