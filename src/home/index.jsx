import React from 'react'
import { render } from 'react-dom'
import CheckboxTree from '../Components/Checkbox-tree/CheckboxTree'
import GraphTree from '../Components/Graph-tree/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import axios from "axios";

const data = [
    {
      'id': 1,
      'name': 'Parent-1',
      'parent': [
        {
          'id': 1,
          'name': 'Child-2',
          'child': [
            { 
              'id': 1,
               'name': 'Child 1-2',
              'subchild': [
                { 'id': 1, 'name': 'Child 1-2' },
              ]
          },
          ]
        },
      ]
    },
    {
      'id': 2,
      'name': 'Parent-2',
      'parent': [
        {
          'id': 1,
          'name': 'Child-2',
          'child': [
            { 
              'id': 1,
               'name': 'Child 2-1',
              'subchild': [
                { 'id': 1, 'name': 'Child 2-2' },
              ]
          },
          ]
        },
      ]
    },
    {
        'id': 3,
        'name': 'Fruit',
        'parent': [
          {
            'id': 1,
            'name': 'Apple',
          },
          {
            'id': 2,
            'name': 'Mango',
          },
        ]
      },
      {
        'id': 4,
        'name': 'Vegetable',
        'parent': [
          {
            'id': 1,
            'name': 'Salad',
          },
          {
            'id': 2,
            'name': 'Poteto',
          },
          {
            'id': 3,
            'name': 'Mushroom',
          },
        ]
      }
  ]
  
  const accessors = [
    {
      label: 'name',
      value: 'id',
      leaves: 'parent',
      type: 'parent'
    },
    {
      label: 'name',
      value: 'id',
      leaves: 'child',
      type: 'child'
    },
    {
      label: 'name',
      value: 'id',
      leaves: 'subchild',
      type: 'subchild'
    },
    {
      label: 'name',
      value: 'id',
      type: 'city'
    }
  ]

  class Demo extends React.Component {
    constructor (params) {
      super(params)
  
      this.action = this.action.bind(this)
      this.state = {
        data: []
    };    
  }s
    action (s) {
      console.log(this.refs.tree.getValues())
    }
  
    render () {
      return (
      <div className='tree'>
        <CheckboxTree
          ref='tree'
          data={data} 
          accessors={accessors}
          onChange={this.action}
        />
        <GraphTree/>
      </div>
      )
    }
  }

export default Demo;