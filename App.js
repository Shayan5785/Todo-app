import { StyleSheet, Text, View , FlatList } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTask from './components/addTask';

function App() {

  const [todos,setTodos] = useState([
    { task: "I have to code till 11", key: 1 },
    { task: "At 13 I have to go to bed again", key: 2 },
    { task: "Then after waking up I should take a bath", key: 3 },
  ]);

  const delHandler = (key) => {
    setTodos( prevTodos => {
      return prevTodos.filter( item => item.key != key )
    } );
  }

  const addHandler = (text) => {
    setTodos( prevTodos => {
      return [
        { task: text, key: Math.random().toString() },
        ...prevTodos,
      ]
    } )
  }

  return (
    <View style={styles.container} >
      <Header />
      <View style={styles.content} >
        <AddTask addHandler={addHandler} />
        <View style={styles.list} >
          <FlatList 
            data={todos}
            renderItem={ ({ item }) => (
              <TodoItem items={item} delHandler={delHandler} />
   ) }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20, 
  }
});

export default App

