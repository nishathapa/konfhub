import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import styles from './Cards.module.css'

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import SearchBar from "material-ui-search-bar";


const Cards = (props) => {
    const [original_conferences_List, setOriginalHasStart] = useState([]);
    const [conferences_List, setHasStart] = useState([]);
    useEffect(() => {
        setHasStart(props.data)
        setOriginalHasStart(props.data)
    }, []);
    if (!conferences_List)
        return <div />;

    const updateConferences = (searchText, conferences_List) => {
        console.log("updateConferences " + searchText)
        console.log(conferences_List)
        conferences_List = original_conferences_List.filter(function (conf) {
            for (var key in conf) {
                if ((key == "confName" && conf[key].toLowerCase().indexOf(searchText.toLowerCase()) > -1) ||
                    (key == "city" && conf[key].toLowerCase().indexOf(searchText.toLowerCase()) > -1)) {
                    return conf;
                }
            }
        })
        setHasStart(conferences_List)
    }


    return (
        <>
            <SearchBar
                style={{
                    margin: '0 auto',
                    maxWidth: 500
                }}
                value={""}
                onChange={(newValue) => updateConferences(newValue, conferences_List)}
                onRequestSearch={(newValue) => updateConferences(newValue, conferences_List)}
            />
            <div>
                <div>
                    {conferences_List.map((data, key) => {
                        return (
                            <div key={key} className={styles.cardsList}>
                                <Confr
                                    key={key}
                                    confName={data.confName}
                                    confStartDate={data.confStartDate}
                                    city={data.city}
                                    country={data.country}
                                    entryType={data.entryType}
                                    imageURL={data.imageURL}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}


const useStyles = makeStyles({
    root: {
        width: 600,
        margin: 10,
    },
});


const Confr = ({ confName, confStartDate, city, country, entryType, imageURL }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Dummy Conference"
                        height="140"
                        image={imageURL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {confName}
                        </Typography>
                        <Typography gutterBottom color="textSecondary" component="p">
                            {entryType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {confStartDate}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {city}, {country}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

const updateConferences = (searchText, conferences_List) => {
    console.log("updateConferences " + searchText)
    console.log(conferences_List)
    conferences_List = conferences_List.filter(function (confs) {
        for (var i in confs) {
            if (confs[i].toLowerCase().indexOf(searchText.toLowerCase()) > -1)
                return confs;
        }
    })
}

export default Cards;