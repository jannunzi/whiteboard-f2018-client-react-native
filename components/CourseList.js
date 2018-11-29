import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Text, List, ListItem} from 'react-native-elements'
import {CourseEditor} from "./CourseEditor";

export class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCourse: {},
      courses: [
        { id: 123, title: 'CS5610'},
        { id: 234, title: 'CS5200'},
        { id: 345, title: 'CS5500'},
        { id: 456, title: 'CS4550'}
      ]
    }
  }

  addCourse = () =>
    this.setState({
      courses: [
        ...this.state.courses,
        { title: 'New Course', id: (new Date()).getTime()}
      ]
    })

  selectCourse = course =>
    this.setState({
      selectedCourse: course
    })

  updateCourse = _course =>
    this.setState({
      courses: this.state.courses.map(
        course => course.id === _course.id ?
          _course : course
      )
    })

  deleteCourse = _course =>
    this.setState({
      courses: this.state.courses.filter(
        course => course.id !== _course.id
      )})

  render() {
    return(
      <View>
        <Text h1>
          Course List
        </Text>
        <List>
          {
            this.state.courses.map(
              course =>
                <ListItem
                  onPress={() => this.selectCourse(course)}
                  subtitle={course.id}
                  title={course.title}
                  key={course.id}/>
            )
          }
        </List>
        <Button
          onPress={() => this.addCourse()}
          backgroundColor="green"
          color="white"
          title="Add Course"/>
        {/*<Text h3>{this.state.selectedCourse.title}</Text>*/}
        <CourseEditor
          delete={this.deleteCourse}
          save={this.updateCourse}
          course={this.state.selectedCourse}s/>
      </View>
    )
  }
}