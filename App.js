
import React,{useState} from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Header from './src/components/header';
import TodoItem from './src/components/todoItem';
import AddTodo from './src/components/addTodo';
import {v4 as uuidv4} from 'uuid';

export default function App() {
 const [todos, setTodos ] = useState([
  {text:'breakfast', key: '1'},
  {text:'bath',key: '2'},
  {text:'do exercise', key: '3'},
  {text:'create an app' , key: '4'},
  {text:'read a book', key:  '5'},
  {text:'watch a film',key: '6'},
 ]);

 const pressHandler = (key) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.key != key);
  });
};

const submitHandler = (text) => {
  if(text.length > 3){
    setText('');
    setTodos(prevTodos => {
      return [
        { text, key:uuidv4()},
        ...prevTodos
      ];
    });
  } else {
      Alert.alert('Error','Todo must be over 3 characters long', [
      {text: 'Understood', onPress: () => console.log('alert closed') }
    ]);
  }
};

return (
  <TouchableWithoutFeedback
     onPress={() => Keyboard.dismiss()}
     
     >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
content: {
  padding: 40,
},
list: {
  marginTop: 20,
},
});