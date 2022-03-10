import { StyleSheet, Text, View  } from 'react-native';

function Header() {
  return (
    <View style={styles.header} >
            <Text style={styles.title} >Shanmek Todo's</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    header: {
        height:80,
        paddingTop:38,
        backgroundColor:'#21a6ff',
    },
    title:{
        textAlign: 'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold', 
    },
})

export default Header