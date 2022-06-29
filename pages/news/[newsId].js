// our-domain.com/news/:newsId

import { useRouter } from "next/router"; // To get URL Params

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId; // Params from "[newsId]"

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
