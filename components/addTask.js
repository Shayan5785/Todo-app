import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import { useState } from 'react';

function AddTask( { addHandler } ) {

    const [value,setValue] = useState('');

    const changeText = val => {
        setValue(val)
    }
    

  return (
    <View>
        <TextInput 
            style={styles.text}
            placeholder='Type your ToDo here...'
            onChangeText={changeText}
        />

        <Button title='ADD TASK' onPress={ ()=> {
            addHandler(value);
            
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default AddTask