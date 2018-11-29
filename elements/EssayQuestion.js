import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, FormInput, FormLabel, FormValidationMessage} from 'react-native-elements'

export default class EssayQuestion
  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      points: 0
    }
  }

  formUpdate = state =>
    this.setState(state)

  render() {
    return(
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={
          text => this.formUpdate
          ({title: text}) }/>
        <FormValidationMessage>
          Title is required
        </FormValidationMessage>
        <Button	backgroundColor="green"
                 color="white"
                 title="Save"/>
        <Button	backgroundColor="red"
                 color="white"
                 title="Cancel"/>

      </View>
    )
  }
}