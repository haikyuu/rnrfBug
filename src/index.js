import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { Platform, View, Text, TouchableOpacity } from 'react-native'

const Acceuil = ()=> (
  <View style={{flex: 1, justifyContent: 'space-around'}}>
    <TouchableOpacity style={{flex: 1, backgroundColor: 'lightblue'}} onPress={Actions.spa}>
      <Text>SPA</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{flex: 1, backgroundColor: 'steelblue'}} onPress={Actions.quartiers}>
      <Text>Quartiers</Text>
    </TouchableOpacity>
  </View>
)

const Quartiers = ()=> <View style={{flex: 1, backgroundColor: 'steelblue'}}></View>
const Spa = ()=> <View style={{flex: 1, backgroundColor: 'lightblue'}}></View>

const renderBackButton = (nav)=>{
  nav.navigationState.index?  (
      <TouchableOpacity onPress={Actions.pop} style={{width: 25,height: 25,}}>
        <Text>Back</Text>
      </TouchableOpacity>
    ): null
}
let initialState
const Kernel = () => (
  <Provider store={createStore(initialState)}>
    <Router
      hideNavBar={ Platform.OS !== 'ios' }
    >
      <Scene key="root">
        <Scene renderBackButton={renderBackButton}
          key="acceuil" component={Acceuil} title="Home" initial={true} />
        <Scene key="quartiers" component={Quartiers} title="PageOne"  />
        <Scene key="spa" component={Spa} title="PageTwo" />
      </Scene>
    </Router>
  </Provider>
)

export default Kernel
