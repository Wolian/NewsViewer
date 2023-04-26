import { useEffect, useState } from "react";
import { Item, Link, News, Wrapper } from "./styled";
import { NewsViewerAPI } from "../NewsViewerAPI";

export const MainContent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    NewsViewerAPI().then((data) => {
      setNews(data);
    });
  }, []);

  return (
    <Wrapper>
      <News>
        {news.map(({ id, url, title, content, publishedAt }) => (
          <Item key={id}>
            <Link href={url} target="_blank" rel="noreferrer">
              <h2>{title}</h2>
              <p>{content}</p>
              <div>{publishedAt}</div>
            </Link>
          </Item>
        ))}
      </News>
    </Wrapper>
  );
};
