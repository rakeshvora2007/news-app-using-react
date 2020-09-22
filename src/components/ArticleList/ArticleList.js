import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { API } from "../../config/Keys";
import styles from "./ArticleList.module.css";
import { Link } from "react-router-dom";
import ArticleDataContext from "../../context/articleData/articleDataContext";

export const ArticleList = () => {
    const [articlesList, setArticlesList] = useState([]);
    const { setData } = useContext(ArticleDataContext);

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API.API_KEY}`)
            .then(response => {
                setArticlesList(response.data.articles);
                setData(response.data.articles);
            })
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
