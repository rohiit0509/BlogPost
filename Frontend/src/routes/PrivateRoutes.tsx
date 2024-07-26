import { Navigate } from "react-router-dom";
import { IsLogin } from "../utils";
import { IComponent } from "../interfaces/IRoutes";
import { useEffect, useState } from "react";

const PrivateRoutes = (props: IComponent) => {
  const [data, setData] = useState("");
  const { component } = props;

  useEffect(() => {
    async function fetchDataAsync() {
      const result:any = await IsLogin();
      setData(result.toString());
    }
    fetchDataAsync();
  }, []);
  if (data === "true") return component;
  else if (data === "false") return <Navigate to="/login" />;
  else return <></>;

  // if (data === "true") return component;
  // else if (data === "false") return <Navigate to="/" />;
  // else return <></>;

  // const comp = IsLogin().then((data) => {
  //   return data ? component : <Navigate to="/"/>
  // })
};

export default PrivateRoutes;
