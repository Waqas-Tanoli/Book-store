import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, title } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2>{title}</h2>
    </div>
  );
};

export default SingleBook;
