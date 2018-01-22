import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        events: [],
      }
    }


  componentDidMount() {
    const q = 'event';
    const location = 'spb';
    const page_size = 10;
    const expand = 'images,place,location,dates,participants';
    const fields = 'body_text,title,dates,id,place,images';
    const page = 1;
    const text_format = 'plain';
    
    const baseApi = 'https://kudago.com/public-api/v1.3/';
    const url = `events/?location=${location}&page_size=${page_size}&expand=${expand}&fields=${fields}&page=${page}&text_format=${text_format}`;

    let arr = [];
    fetch(baseApi + url).then(res => {
        this.setState({ events: JSON.parse(res._bodyText).results });
        arr.push(JSON.parse(res._bodyText).results);
    });
    console.warn(arr);
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