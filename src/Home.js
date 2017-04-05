//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, ListView } from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import { List, ListItem, Text } from 'react-native-elements'
import AppColors from './AppColors';

// create a component
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { list: [],winner : "Click for" };
    }

    getUserList() {
        var that = this;
        var Participants = Parse.Object.extend("Participants");
        var query = new Parse.Query(Participants);
        query.find({
            success: function (results) {
                that.setState({ list: results });
            },
            error: function (error) {
                console.warn("Error: " + error.code + " " + error.message);
            }
        });
    }

    getRandomParticipant(results){
        return results[Math.floor(Math.random() * results.length)].get("username");
    }

    componentWillMount() {
        this.getUserList();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text h2 style={styles.appName}>Zing Zing !!</Text>                  
                </View>
                <View style={styles.content}>
                     <Icon containerStyle={styles.icon}
                        raised
                        name='plus'
                        type='font-awesome'
                        color='#fff'
                        onPress={Actions.addUser} />
                    <ScrollView>
                        <List containerStyle={{ marginBottom: 20 }}>
                            {
                                this.state.list.map((item, i) => (
                                    <ListItem hideChevron={true}
                                        key={i}
                                        title={item.get("username")}
                                    />
                                ))
                            }
                        </List>
                    </ScrollView>
                </View>
                <View style={styles.bottomsheet}>
                    <Text h3 style={styles.appName}>{this.state.winner}</Text>  
                    <Icon
                        raised
                        name='trophy'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.setState({winner:this.getRandomParticipant(this.state.list)})} />     
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 25,
        backgroundColor: AppColors.darkprimarycolor

    },
    topBar: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:5,
        backgroundColor: AppColors.defaultprimarycolor,
    },
    content: {
        flex: 0.8,
        justifyContent: 'center',
        backgroundColor: AppColors.appBackground

    },
    icon: {
        backgroundColor: AppColors.accentcolor,
        position: 'absolute',
        right: 10, 
        top: -40,
        zIndex: 1
    },
    appName:{
        color:AppColors.appBackground,
    },
    bottomsheet :{
        flex: 0.1,
                flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.lightprimarycolor
    }
});

//make this component available to the app
export default Home;
