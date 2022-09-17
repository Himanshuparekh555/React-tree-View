import React from 'react'
import { AnimatedTree  } from 'react-tree-graph';
import data from './data';
import 'react-tree-graph/dist/style.css'
import './index.css';

class Graph extends React.Component {
  render () {
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
  }
  

  export default Graph;