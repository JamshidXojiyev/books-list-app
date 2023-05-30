import { useNavigate } from "react-router-dom";
import { AuthSate } from "../interfaces/auth-interface";
import { useUserInfoMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { Md5 } from "ts-md5";

export const useUserInfo = (): void => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfoMutation, { data, error }] = useUserInfoMutation();

  const userInfo: AuthSate = JSON.parse(
    localStorage.getItem("user-info") || "{}"
  );

  if (userInfo?.secret?.length > 0 || userInfo?.key?.length > 0) {
    const hash = Md5.hashStr(`get/myself${userInfo?.secret}`);

    userInfoMutation({
      key: userInfo?.key,
      sign: hash,
    })
      .then((res) => {
        dispatch(setUser({ ...data.data }));
        navigate("/");
      })
      .catch((err) => {
        localStorage.removeItem("user-info");
        navigate("/sign-up");
        console.log(err);
      });
  } else {
    navigate("/sign-up");
  }

  return;
};
