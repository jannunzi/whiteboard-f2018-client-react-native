import React, {Component} from 'react'
import {View} from 'react-native'
import {FormInput, Button, Text, List, ListItem} from 'react-native-elements'

export class CourseEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: props.course
    }
  }

  componentDidUpdate = newProps => {
    if(newProps.course.id !== this.state.course.id) {
      this.setState({
        course: newProps.course
      })
    }
  }

  setCourseTitle = newTitle =>
    this.setState({
      course: {title: newTitle, id: this.state.course.id}
    })

  save = () =>
    this.props.save(this.state.course)

  delete = () =>
    this.props.delete(this.state.course)

  render() {
    return(
      <View>
        <Text h1>
          Course Editor
        </Text>
        <FormInput
          onChangeText={newTitle => this.setCourseTitle(newTitle)}
          value={this.state.course.title}/>

        <Text>{this.state.course.title}</Text>

        <Button
          title="Save"
          onPress={() => this.save()}
          color="white"
          backgroundColor="blue"/>
        <Button
          title="Delete"
          onPress={() => this.delete()}
          color="white"
          backgroundColor="red"/>
      </View>
    )
  }
}