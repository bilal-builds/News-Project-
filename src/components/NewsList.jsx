import NewsItem from "./NewsItem";

export default function NewsList({ news }) {
  return (
    <>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </>
  );
}