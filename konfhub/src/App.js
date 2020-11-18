import React from 'react';

import { fetchData } from './api';

import styles from './App.module.css'
import HomePage from './components/HomePage/HomePager'

class App extends React.Component {
    state = {
        data: null
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log("ksksksskskks")
        console.log(fetchedData)
        this.setState({ data: fetchedData })
    }
    render() {
        const { data } = this.state
        return (
            <div className={styles.container}>
                {
                   data?<HomePage data={data.conferences} /> : null
                }
            </div>
        )
    }
}

export default App;  