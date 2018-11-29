import React from 'react'
import { View } from 'react-native'
import { Text, Divider, List, ListItem } from 'react-native-elements'

const courses = [
  {	title: 'Question 1',
    subtitle: 'Multiple choice',
    icon: 'list'},
  {	title: 'Question 2',
    subtitle: 'Fill-in the blanks',
    icon: 'code'},
  {	title: 'Question 3',
    subtitle: 'True or false',
    icon: 'check'},
  {	title: 'Question 4',
    subtitle: 'Essay',
    icon: 'subject'}]


const TextHeadings = () => (
  <View style={{
    padding: 15
  }}>

    <List>
      {
        courses.map(course =>
          <ListItem
            key={course.title}
            leftIcon={{name: course.icon}}
            subtitle={course.subtitle}
            title={course.title}/>
        )
      }
    </List>

    <List>
      <ListItem
        title="Course 123"
        leftIcon={{ name: "list" }}
        subtitle="best course ever"/>
      <ListItem title="Course 234"/>
      <ListItem title="Course 345"/>
      <ListItem title="Course 456"/>
    </List>

    <Text h1>Welcome!</Text>
    <Text h2>Heading size 2</Text>
    <Text h3>Heading size 3</Text>
    <Text h4>Heading size 4</Text>

    <Divider
      style={{
        backgroundColor:
          'blue' }} />



    <Text>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </Text>

  </View>)
export default TextHeadings
