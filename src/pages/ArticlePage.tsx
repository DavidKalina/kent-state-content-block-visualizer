import Article from "@/components/Article";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { title, content } = useParams();

  return <Article content={content?.toString()} title={title?.toString()} />;
};

export default ArticlePage;
