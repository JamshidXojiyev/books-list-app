import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../app/features/authSlice";

export const useAuth = () => {
  const user = useSelector(selectAuth);

  return useMemo(() => ({ user }), [user]);
};
