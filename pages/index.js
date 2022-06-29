// our-domain.com/
import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <Link href="/news/nextjs-as-a-great-framework">
          NextJS is very Cool
        </Link>
        <li>Need to study hard</li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
