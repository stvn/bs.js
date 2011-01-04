gin.ns('bs', {
  version:     '0.0.1',
  author:      'Steven Davie',
  website:     'http://www.github.com/stvn/bs.js',
  description: 'Javascript 2d Gaming Framework.',
  global: window,
  router: hza.router,

  registry: {
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

bs.models = {
  user: new hza.Model('user'),
  session: new hza.Model('session'),
  game: new hza.Model('main')
};

bs.controllers = {
  user: new hza.Controller('user', bs.models.user),

  session: new hza.Controller('session', bs.models.session, {
    create: function (id, credentials) {
      var user = bs.proxy.authorize(credentials);
      if (user) {
        this.model.create('user', user); 
        game.router.route('game/index');
      } else {
        console.info('TODO: add flash component');
        game.router.route('session/new');
      }
    }    
  }),

  game: new hza.Controller('game', bs.models.game, {
    index: function () {
      var user = this.model.find('user');
      this.render('index', user);
    }          
  })
};

bs.views = {
  login: new hza.View('new', bs.controllers.session),
  game: new hza.View('index', bs.controllers.game),
  user: new hza.View('user', bs.controllers.user)

};

bs.proxy = {
  authorize: function (credentials) {
    console.info('TODO: add server connect');
    var user = {avatars: [], friends: [], lastLogin: new Date() }
    return user;
  }
}
