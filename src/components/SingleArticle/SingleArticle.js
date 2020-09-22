import React, {useContext, useEffect} from 'react';
import styles from "./SingleArticle.module.css";
import ArticleDataContext from "../../context/articleData/articleDataContext";

export const SingleArticle = (props) => {
    const {data, getData} = useContext(ArticleDataContext);
    useEffect(() => {
        getData();
    }, [])
    const article  = data[props.match.params.id];
    
    return (
        <div className={styles.newspaper_article_wrapper}>
            {article &&
                <div className={styles.newspaper_article}>
                    <header>
                        <h2>{article.title}</h2>
                        <div className={styles.author}>From {article.author}</div>
                    </header>
                    <div className={styles.image_wrapper}>
                        <div>
                            <img className={styles.full_article_image} src={article.urlToImage} alt={article.description} />
                            <figcaption>{article.description}</figcaption>
                        </div>
                    </div>

                    <div className="content">{article.content}</div>
                    <div className="url">More Information: &nbsp;
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
                    </div>
                </div>
            }
        </div>
    )
}