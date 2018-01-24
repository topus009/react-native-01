// export default function get_events(current_page) {
//   const q = 'event';
//   const location = 'spb';
//   const page_size = 10;
//   const expand = 'images,place,location,dates,participants';
//   const fields = 'body_text,title,dates,id,place,images';
//   const text_format = 'plain';

//   const baseApi = 'https://kudago.com/public-api/v1.3/';
//   const url = `events/?location=${location}&page_size=${page_size}&expand=${expand}&fields=${fields}&page=${current_page}&text_format=${text_format}`;

//   return fetch(baseApi + url);
// }


export default function get_events(input) {
  const location = 'spb';
  const expand = 'images,place,location,dates,participants';
  const fields = 'body_text,title,dates,id,place,images';
  const text_format = 'plain';
  const ctype= 'event';
  const page_size = 100;

  const baseApi = 'https://kudago.com/public-api/v1.3/';
  const url = `search/?q=${input}&location=${location}&expand=${expand}&fields=${fields}&page_size=${page_size}&text_format=${text_format}`;
  return fetch(baseApi + url);
}


