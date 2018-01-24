const styles = (Dimensions) => {
  const dW = Dimensions.get('window').width;
  const dH = Dimensions.get('window').height;
  return {
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingTop: 35,
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'stretch',
      flexDirection: 'column',
      maxHeight: dH,
    },
    not_found_wrapper: {
      // borderWidth: 1,
    },
    not_found_text: {
      fontSize: 14,
      color: '#000000',
    },
    loader: {
      // flex: 0,
    },
    pages: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    page: {
      width: 23,
      height: 23,
      borderRadius: 5,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 4,
      backgroundColor: '#ffffff',
    },
    page_text: {
      alignSelf: 'stretch',
      textAlign: 'center',
      borderRadius: 5,
      lineHeight: 22,
    },
    page_text_active: {
      backgroundColor: '#BFBFBF',
      alignSelf: 'stretch',
      textAlign: 'center',
      borderRadius: 5,
      lineHeight: 22,
      color: '#ffffff', 
    },
    scroll_view: {
      maxHeight: dH - 155,
      // maxHeight: dH - 350,
      flex: 0,
    },
  }
}

export default styles;