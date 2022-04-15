import Head from "next/head";
import React from "react";
import { ArticleList } from "../components/ArticleList";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Web Dev Forum</title>
        <meta
          name="keywords"
          content="web dev,development,programming,coding"
        />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}
