import React, {Component} from 'react'
import {ButtonGroup} from 'react-native-elements'

export default class QuestionTypeChooser extends Component {

  constructor() {
    super()
    this.state = {selectedIndex: 2}
  }

  updateIndex = selectedIndex =>
    this.setState({selectedIndex})

  render () {
    const buttons = [
      'Multiple Choice',
      'Fill in the blank',
      'Essay',
      'True or\nfalse'
    ]

    const { selectedIndex } = this.state
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 75}}/>)}

}