import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { FC, memo } from "react";

interface Props {
  page: number;
  title: string;
}

const App: FC<Props> = ({ page, title }) => {
  const [Userdata, setUsersdata] = useState([]);
  const [pagelist, setPage] = useState(page);

  useEffect(() => {
    console.log("start", pagelist);
    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
          pagelist +
          "&results=20"
      )
      .then((response) => {
        console.log("data below");
        console.log(response.data.results);
        setUsersdata(response.data.results);
      });
  }, [pagelist]);

  return (
    <>
      <div className="text-wide flex justify-center">
        <div className="space-y-1 space-x-5 bg-gray-200 border-2 border-black"> 
          <div className="text-center">Email below</div>
          {Userdata.map((u: any) => (
            <div>{u.email}</div>
          ))}
        </div>
        <div className="space-y-1 space-x-5 bg-gray-200  border-2 border-black">
          <div>Gender below</div>
          {Userdata.map((u: any) => (
            <div>{u.gender}</div>
          ))}
        </div>
      </div>
      <button
        className="py-2 px-3 text-base text-white bg-green-700 rounded-md my-5 mx-auto flex"
        onClick={() => {
          setPage(pagelist + 1);
          console.log("New page");
        }}
      >
        Next Page
      </button>
    </>
  );
};
App.defaultProps = {};
export default memo(App);
