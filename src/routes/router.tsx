import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import routeLinks from "./routes";
import { AppLayout, Auth } from "../components";

export const Router: FC = () => {
  return (
    <Routes>
      {routeLinks.map((item) =>
        item.isPrivate ? (
          <Route
            path={item.path}
            key={item.path}
            element={
              <AppLayout>
                <item.component />
              </AppLayout>
            }
          />
        ) : (
          <Route
            path={item.path}
            key={item.path}
            element={
              <Auth>
                <item.component />
              </Auth>
            }
          />
        )
      )}
    </Routes>
  );
};
