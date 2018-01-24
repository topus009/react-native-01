export default function filter_events(events, page) {
  function func(e, i, items) {
    if (page === 1) {
      if (i <= 9) {
        return true
      }
      else return false
    } 
    if (page > 1) {
      if (i - 1 >= ((page * 10) - 10 - 1) && i - 1 <= (page * 10) - 2) {
        return true
      }
      else return false
    }
  };
  
  let events_on_page = events.filter(func);

  return events_on_page;
}

