import React from "react";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <div>
      <h1 className="text-3xl p-4 text-center bg-white shadow-md m-12">
        Hello Welcome To Page :{slug}
      </h1>
    </div>
  );
};

export default Slug;
