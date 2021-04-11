import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux'
import { addItem } from './reducer'
import ADD_ITEM from './reducer'
//import { createStackNavigator } from '@react-navigation/stack';






const Home = (props) => {

    //const Stack = createStackNavigator();



    const { navigation } = props
    const [text, setText] = React.useState('');
    const listItems = useSelector(state => state.itemList)
    //const testItems = JSON.stringify(listItems)

    console.log("Test Items :" + JSON.stringify(listItems));

    const dispatch = useDispatch()

    const addList = text => {
        dispatch(addItem(text))


    }







    return (

        <View style={{ flex: 1 }}>

            <View style={{ width: '99%', height: '30%' }}>

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Enter Item name"
                    onChangeText={text => setText(text)}
                    defaultValue={text} />
                <View style={{
                    width: '100%', height: 1, backgroundColor: 'black', marginTop: -5,
                    marginLeft: 5, marginRight: 50
                }}></View>

                <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>

                    <TouchableOpacity onPress={() => addList(text)}>
                        <Text style={{ paddingHorizontal: 20, backgroundColor: 'green', paddingVertical: 5, borderRadius: 5, color: 'white' }}>
                            Submit
                </Text>

                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ width: '100%', height: '100%',  }}>

                <FlatList
                    data={listItems}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Text style={{ color: 'black',width:'100%',height:40,marginTop:5,elevation:3,backgroundColor:'#ff54df',textAlign:'center',justifyContent:'center' }}>{ item.name}</Text>}
                />

            </View>
        </View>
    );
};

// const mapStateToprops = state => state;
// const mapDispatchToprops = dispatch({})
// const connectComponent = connect(mapStateToprops,mapDispatchToprops)

// export default connectComponent(Home);
export default Home;