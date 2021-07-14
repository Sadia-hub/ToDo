import React from 'react';
import {
  Text, View
} from 'react-native'


const ToDoList = ({ tasks, handleDone}) => {
  return (  
      <div>                 
      {
        tasks.map((task, i) =><div>
          <Text>{task}</Text>
          <button
            onClick={() => { handleDone(i) }}>Done
          </button>
          </div>)
      }
      </div>
    );
}

export default ToDoList;
