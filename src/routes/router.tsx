import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import routeLinks from "./routes";
import { AppLayout, Auth } from "../components";
import { PrivateOutlet } from "../utils/PrivateOutlet";

export const Router: FC = () => {
  return (
    <Routes>
      {routeLinks.map((item) =>
        item.isPrivate ? (
          <Route path="*" element={<PrivateOutlet />}>
            <Route
              index={item.index}
              path={item.path}
              key={item.path}
              element={
                <AppLayout>
                  <item.component />
                </AppLayout>
              }
            />
          </Route>
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
