import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API } from "../../config/Keys";
import styles from "./ArticleList.module.css";
import { Link } from "react-router-dom";

export const ArticleList = (props) => {
    console.log(props);
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API.API_KEY}`)
            .then(response => {
                setArticlesList(response.data.articles);
                console.log(response.data.articles);
            })
        return () => {
            // cleanup
        }
    }, [])


    return (
        <div>
            {articlesList.map((article, id) => {
                return (
                    <div key={id} className={styles.card_wrapper}>
                        <article className={styles.card} style={setBackgroundImage(article.urlToImage)}>
                            <div className={styles.source}>{article.source.name}</div>
                            <figcaption className={styles.title_wrapper}>
                                <Link className={styles.link} to={{ pathname: `/article/${id}`, article }}>
                                    <div className={styles.title}>{article.title}</div>
                                </Link>
                            </figcaption>
                        </article>
                    </div>
                )
            })}
        </div>
    );

}

const setBackgroundImage = imageUrl => {
    if (imageUrl === null) return {};
    return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
    }
}
