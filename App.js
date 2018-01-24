import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import get_events from './src/get_events';
import filter_events from './src/filter_events';
import ListItem from './src/ListItem';
import Input from './src/Input';
import AppStyle from './src/App.style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.onChangeText = this.onChangeText.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.onOpenPopup = this.onOpenPopup.bind(this);

      this.state = {
        events: [],
        events_on_page: [],
        input: '',
        fetching: false,
        is_mounted: true,
        page_current: 1,
        page_size: 10,
        pages_count: 0,
        popup_open: false,
      }
    }
  
  // componentDidMount() {

  // }

  // componentDidUpdate(prevState) {
  //   const {
  //     page_current,
  //     events,
  //   } = this.state;
  //   console.log('******');  
  //   console.warn(events);
  //   console.warn(page_current);
  //   console.log('******');
  // }
  
  onOpenPopup(id) {
    const { popup_open } = this.state;
    this.setState({
      popup_open: !popup_open,
    });

    console.warn(id)

  }

  onChangeText(e) {
    this.setState({input: e});
  }

  onSearch(page = 1) {
    const {
      input,
    } = this.state;

    if (input.length > 0) {
      this.setState({ fetching: true });

      get_events(input).then(res => {
        const {
          page_size,
        } = this.state;

        const events = JSON.parse(res._bodyText).results;
        const events_length = events.length;

        const pages_count = Math.ceil(events_length / 10);
        const page_current = page ? page : 1;

        if (events_length > 10) {
          this.setState({
            pages_count: pages_count,
            page_current: page_current,
            events: events,
            events_on_page: filter_events(events, page),
            fetching: false,
            is_mounted: false,
          });
        } else {
          this.setState({
            events: events,
            events_on_page: events,
            fetching: false,
            is_mounted: false,
          });
        }
      });
    }
  }

  render() {
    const Dimensions = require('Dimensions');
    const styles = StyleSheet.create(AppStyle(Dimensions));

    const {
      events,
      events_on_page,
      input,
      fetching,
      is_mounted,
      pages_count,
      page_current,
    } = this.state;

    let items = [];
    let page_buttons = [];

    if (events && events.length) {
      events.map((e,i) => {
        let index_fix = (i / 10) + 1;
        
        if (i % 10 === 0) {
          page_buttons.push(
            <View 
              style={styles.page} key={'page' + i}
            >
              <Text 
                id={index_fix + ''}
                style={page_current !== index_fix ? styles.page_text : styles.page_text_active}
                ref={text => this['_page_' + index_fix] = text}
                onPress={() => this.onSearch(index_fix)}>
                {index_fix}
              </Text>
            </View>
          );
        }
      });
      events_on_page.map((e, i) => {
        items.push(<ListItem data={e} key={'list_item' + i} onOpenPopup={this.onOpenPopup}/>);
      });
    }

    return (
      <View style={styles.container}>
        {/* =============== INPUT ================ */}
        <Input 
          onChangeText={e => this.onChangeText(e)}
          input={input}
          onSearch={() => this.onSearch()}
        />
        {/* ============== LOADER ================ */}
        {fetching && 
          <ActivityIndicator 
            style={styles.loader}
            color='#000000'
            size='large'
          />
        }
        {/* ========== ITEMS / NULL ============== */}
        {items && items.length ?
          <View style={styles.scroll_view}>
            <ScrollView>
              {items}
            </ScrollView>
          </View> 
          :
          input.length && !fetching && !is_mounted ?  
            <View style={styles.not_found_wrapper}>
              <Text style={styles.not_found_text}>НЕТ СОБЫТИЙ</Text>
            </View>
            :
            null
        }
        {/* ================ PAGES =============== */}
        <View style={styles.pages}>
         {page_buttons}
        </View>
      </View>
    );
  }     
}