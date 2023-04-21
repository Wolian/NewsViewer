import { useEffect, useState } from "react";
import { Item, Link, News, Wrapper } from "./styled";
import axios from "axios";
import { APIKey } from "../../../core/API";

export const MainContent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=pl&apiKey=${APIKey}`)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <News>
        {news.map(({ id, url, title, content }) => (
          <Item key={id}>
            <Link href={url} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
              <p>{content}</p>
            </Link>
          </Item>
        ))}
      </News>
    </Wrapper>
  );
};
