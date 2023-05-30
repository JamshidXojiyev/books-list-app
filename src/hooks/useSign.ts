import { Md5 } from "ts-md5";

interface IUseSignProps {
  method: string;
  url: string;
  secret: string;
}

export const useSign = ({ method, url, secret }: IUseSignProps) => {
  const hash = Md5.hashStr(method + url + secret);
  return hash;
};
