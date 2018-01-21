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
    
    // const baseApi = 'https://kudago.com/public-api/v1.3/';
    // const url = `search/?q=${q}&location=${location}&page_size=${page_size}&expand=${expand}`;
    const baseApi = 'https://kudago.com/public-api/v1.3/';
    const url = `events/?location=${location}&page_size=${page_size}&expand=${expand}&fields=${fields}&page=${page}&text_format=${text_format}`;

    let arr = [];
    fetch(baseApi + url).then(res => {
        this.setState({ events: JSON.parse(res._bodyText).results });
        arr.push(JSON.parse(res._bodyText).results);
    });
    console.warn('============');
    console.warn(arr);
  }

  render() {
    const events = this.state.events.map((e,i) =>
      <View 
        key={i}
        id={e.id}
      >
        <Image
          style={{width: 144 * 0.6, height: 96 * 0.6}}
          source={{uri: e.images[0].thumbnails['144x96']}}
        />
        <Text 
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
    // flex: 1,
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: '#F1F1F1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list_item: {
    fontSize: 18,
    lineHeight: 18,
    textAlignVertical: 'center',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'solid',
    marginBottom: 20,
  }
});

// 1 - дата/время ивента 
// 2 - картинка ивента 
// 3 - название ивента 
// 4 - название места 
// 5 - адрес места

// id - идентификатор
// short_title - короткое название
// dates - даты проведения
// title - название


// place - место проведения
// description - описание
// body_text - полное описание

// categories - список категорий
// tagline - тэглайн
// age_restriction - возрастное ограничение
// price - стоимость
// is_free - бесплатное ли событие
// images - картинки
// favorites_count - сколько пользователей добавило событие в избранное
// comments_count - число комментариев к событию
// site_url - адрес события на сайте kudago.com
// tags - тэги события
// participants - агенты события

// aliceblue (#f0f8ff)
// antiquewhite (#faebd7)
// aqua (#00ffff)
// aquamarine (#7fffd4)
// azure (#f0ffff)
// beige (#f5f5dc)
// bisque (#ffe4c4)
// black (#000000)
// blanchedalmond (#ffebcd)
// blue (#0000ff)
// blueviolet (#8a2be2)
// brown (#a52a2a)
// burlywood (#deb887)
// cadetblue (#5f9ea0)
// chartreuse (#7fff00)
// chocolate (#d2691e)
// coral (#ff7f50)
// cornflowerblue (#6495ed)
// cornsilk (#fff8dc)
// crimson (#dc143c)
// cyan (#00ffff)
// darkblue (#00008b)
// darkcyan (#008b8b)
// darkgoldenrod (#b8860b)
// darkgray (#a9a9a9)
// darkgreen (#006400)
// darkgrey (#a9a9a9)
// darkkhaki (#bdb76b)
// darkmagenta (#8b008b)
// darkolivegreen (#556b2f)
// darkorange (#ff8c00)
// darkorchid (#9932cc)
// darkred (#8b0000)
// darksalmon (#e9967a)
// darkseagreen (#8fbc8f)
// darkslateblue (#483d8b)
// darkslategrey (#2f4f4f)
// darkturquoise (#00ced1)
// darkviolet (#9400d3)
// deeppink (#ff1493)
// deepskyblue (#00bfff)
// dimgray (#696969)
// dimgrey (#696969)
// dodgerblue (#1e90ff)
// firebrick (#b22222)
// floralwhite (#fffaf0)
// forestgreen (#228b22)
// fuchsia (#ff00ff)
// gainsboro (#dcdcdc)
// ghostwhite (#f8f8ff)
// gold (#ffd700)
// goldenrod (#daa520)
// gray (#808080)
// green (#008000)
// greenyellow (#adff2f)
// grey (#808080)
// honeydew (#f0fff0)
// hotpink (#ff69b4)
// indianred (#cd5c5c)
// indigo (#4b0082)
// ivory (#fffff0)
// khaki (#f0e68c)
// lavender (#e6e6fa)
// lavenderblush (#fff0f5)
// lawngreen (#7cfc00)
// lemonchiffon (#fffacd)
// lightblue (#add8e6)
// lightcoral (#f08080)
// lightcyan (#e0ffff)
// lightgoldenrodyellow (#fafad2)
// lightgray (#d3d3d3)
// lightgreen (#90ee90)
// lightgrey (#d3d3d3)
// lightpink (#ffb6c1)
// lightsalmon (#ffa07a)
// lightseagreen (#20b2aa)
// lightskyblue (#87cefa)
// lightslategrey (#778899)
// lightsteelblue (#b0c4de)
// lightyellow (#ffffe0)
// lime (#00ff00)
// limegreen (#32cd32)
// linen (#faf0e6)
// magenta (#ff00ff)
// maroon (#800000)
// mediumaquamarine (#66cdaa)
// mediumblue (#0000cd)
// mediumorchid (#ba55d3)
// mediumpurple (#9370db)
// mediumseagreen (#3cb371)
// mediumslateblue (#7b68ee)
// mediumspringgreen (#00fa9a)
// mediumturquoise (#48d1cc)
// mediumvioletred (#c71585)
// midnightblue (#191970)
// mintcream (#f5fffa)
// mistyrose (#ffe4e1)
// moccasin (#ffe4b5)
// navajowhite (#ffdead)
// navy (#000080)
// oldlace (#fdf5e6)
// olive (#808000)
// olivedrab (#6b8e23)
// orange (#ffa500)
// orangered (#ff4500)
// orchid (#da70d6)
// palegoldenrod (#eee8aa)
// palegreen (#98fb98)
// paleturquoise (#afeeee)
// palevioletred (#db7093)
// papayawhip (#ffefd5)
// peachpuff (#ffdab9)
// peru (#cd853f)
// pink (#ffc0cb)
// plum (#dda0dd)
// powderblue (#b0e0e6)
// purple (#800080)
// rebeccapurple (#663399)
// red (#ff0000)
// rosybrown (#bc8f8f)
// royalblue (#4169e1)
// saddlebrown (#8b4513)
// salmon (#fa8072)
// sandybrown (#f4a460)
// seagreen (#2e8b57)
// seashell (#fff5ee)
// sienna (#a0522d)
// silver (#c0c0c0)
// skyblue (#87ceeb)
// slateblue (#6a5acd)
// slategray (#708090)
// snow (#fffafa)
// springgreen (#00ff7f)
// steelblue (#4682b4)
// tan (#d2b48c)
// teal (#008080)
// thistle (#d8bfd8)
// tomato (#ff6347)
// turquoise (#40e0d0)
// violet (#ee82ee)
// wheat (#f5deb3)
// white (#ffffff)
// whitesmoke (#f5f5f5)
// yellow (#ffff00)
// yellowgreen (#9acd32)