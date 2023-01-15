import { memo, useState } from "react";
import { useSearchParams, Outlet, Routes } from "react-router-dom";

export default memo(() => {
  const [searchParams] = useSearchParams();
  const [query] = useState(searchParams.get("id"));
  return (
    <div>
      <h2>home</h2>
      <div>query参数：{query}</div>
        <Outlet />
    </div>
  );
});
