import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ListItem = ({ data, onOpenPopup }) => {
  const {
    id,
    first_image,
    title,
  } = data;

  const image = first_image ? first_image.thumbnails ? first_image.thumbnails['144x96'] ? first_image.thumbnails['144x96'] : first_image.image ? first_image.image : '' : '' : '';
  const empty_image = <View style={styles.empty_image}></View>;

  return (
    <View 
      id={id}
      style={styles.item}>
      {image !== '' ? 
        <Image
          style={styles.image}
          source={{uri: image}}
        />
        :
        <View style={styles.image}></View>
      }
      <Text 
        numberOfLines={3}
        textBreakStrategy={'simple'}
        style={styles.title}>
        {title}
      </Text>
      {/*
            <Icon 
        name='md-open' 
        size={20} 
        style={styles.icon_popup}
        onPress={onOpenPopup(id)}
      />
      */}

    </View> 
  );
}

export default ListItem

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    lineHeight: 16,
    textAlignVertical: 'center',
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    width: 175,
    color: '#000000'
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 4,
  },
  image: {
    width: 144,
    height: 96,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  icon_popup: {
    color: '#000000',
    top: 5,
    right: 20,
  },
});