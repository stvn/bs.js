gin.ns('bs', {
  version:     '0.0.1',
  author:      'Steven Davie',
  website:     'http://www.github.com/stvn/bs.js',
  description: 'Javascript 2d Gaming Framework.',
  global: window,

  repository: {
    entries: {},
    
    _lastId: 0,

    addEntry: function (entry) {
      this.entries[entry.id] = entry;
      this._lastId += 1;
    },

    removeEntry: function (id) {
      delete this.entries[id];
    }
  }
});
