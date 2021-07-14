import React, { Component, useState } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import ToDoList from './components/ToDoList'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");


  const chandleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'task') { 
      setTask(() => value);     
    }
  }

   
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...todos, task]);
    setTask("");
  } 

  const handleDone = (id) => { 
    setTodos((prev) => prev
      .filter((prev, i) => i !== id));
  }
   
    return (
      <View style={styles.container}>
        <form onSubmit={handleSubmit}>
          <TextInput type="text" name="task" style={{
            borderColor: 'gray',
            borderWidth: 1
          }}
            placeHolder="Enter Task"
            onChange={chandleChange}
            value={task}
          />
          <button type="submit">Submit</button>
        </form>
        <ToDoList tasks={todos} handleDone={handleDone}/>                
      </View>
    )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default App;

