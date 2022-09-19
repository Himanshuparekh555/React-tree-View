import React from 'react'
import { AnimatedTree  } from 'react-tree-graph';
import axios from "axios";
import 'react-tree-graph/dist/style.css'
import './index.css';

function Graph() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const url =
      "http://117.217.126.114:8050/api/MenuMasters/GetMenuMasterList/173";
    const { data } = await axios.get(url);
    const parent = data?.data.filter((i) => i.menuPath === "#");
    const result = [];
    parent.forEach((i) => {
      const child = data.data.filter((o) => {
        return o?.menuPath.includes(i?.name ? i.name.toLowerCase() : "");
      });
      result.push({ ...i, children: child });
    });
    setData(result[0]);
  };

  return (
    <div className="custom-container">
      <AnimatedTree
        data={data}
        nodeRadius={30}
        margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
        height={800}
        width={800}
      />
    </div>
  );
}
  export default Graph;