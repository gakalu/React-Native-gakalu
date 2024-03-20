import React from 'react';
import { Text, View,Button,StyleSheet} from 'react-native';
function Counter() {
const[count,setCount]=React.useState({count:3000})
const[color,setColor]=React.useState({color:styles.container.backgroundColor});
const dec = () => setCount({count:count.count-1});
React.useEffect(()=>{
const interval = setInterval(dec, 1000)
return clearInterval(interval)
})
const colorChange=()=>{

count.count<3000&&count.count>2400?setColor({background:'green'}):'orange';
}
return (
<Text Style={styles.paragraph}>{count.count}<br/>
<button onPress={()=>setColor(colorChange)}>Start</button>
<button onPress={()=>setCount({count:3000})}>stop</button>
<button onPress={()=>clearInterval(interval)}>puse</button>
</Text>
)
}

const myApp = () => {
  return (
    <View style={styles.container}>
    <Counter/>
    </View>

  );
}
const styles=StyleSheet.create({
 container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'lightgray'
 },
 paragraph:{
   margin:24,
   fontSize:50,
   fontWeight:'bold',

 }
})
export default myApp;
