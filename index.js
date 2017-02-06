var configuration = {
  'event-name': {
    max: 20, //for each event, number of
    time: 60 //seconds
  }
};

const channel = {
  listeners: [],
  history: {},

  dispatch: function(event, payload) {
    this.listeners.each((l) => {
      if (l.event === event) l.callback(payload);
    });

    record(this.history, event, payload);
  },

  on: function(event, callback) {
    this.listeners.push({
      event: event,
      callback: callback.name
    });
  },

  off: function(event, callback) {

  },

  /*Object containing event name and settings. Will be added to config. */
  configure: function () {

  }
};

function record(history, event, payload) {
  if (!history[event]) this.history[event] = [];
  history.push({
    payload: payload,
    date: new Date()
  });
}

export default channel;