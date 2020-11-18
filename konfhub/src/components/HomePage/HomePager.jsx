import React from 'react';

import Cards from '../Cards/Cards';
import styles from './HomePage.module.css'

const HomePage = (props) => {
    return (
        <div className={styles.confheader}>
            <p>All Conferences</p>
            <Cards data={props.data} />
        </div>
    );
};

export default HomePage;