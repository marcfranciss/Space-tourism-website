import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Suspense fallback={<div className='loader'></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
