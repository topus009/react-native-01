import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import getEvents from './src/getEvents';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        events: [],
        current_page: 1,
      }
    }
  
  componentDidMount() {
    const { current_page } = this.state;
    getEvents(current_page).then(res => {
          this.setState({ events: JSON.parse(res._bodyText).results });
      });
  }

  render() {
    const events = this.state.events.map((e,i) =>
      <View 
        key={i}
        id={e.id}
        style={styles.text_view}>
        <Image
          style={styles.image}
          source={{uri: e.images[0].thumbnails['144x96']}}
        />
        <Text 
          numberOfLines={3}
          textBreakStrategy={'simple'}
          style={styles.list_item}>
          {e.title}
        </Text>
      </View> 
    );

    return (
      <View style={styles.container}>
        <ScrollView>
          {events}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 35,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_item: {
    fontSize: 16,
    lineHeight: 16,
    textAlignVertical: 'center',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    width: 175,
  },
  text_view: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'solid',
  },
  image: {
    width: 144,
    height: 96,
  },
});