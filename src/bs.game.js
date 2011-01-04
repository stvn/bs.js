gin.Class('bs.Game', {
  router: hza.router,
  timer: new bs.Timer(),

  init: function () {
    if (bs.LOGGED_IN) {
      this.loadGame();  
    } else {
      this.initLogin();
    }
  },

  initLogin: function () {
    bs.views.login.registerComponent(new hza.Component(bs.assets.loginForm));
    bs.views.game.registerComponent(new hza.Component(bs.assets.viewport));
    this.router.route('session/new');
  },

  loadGame: function () {
    if (!bs.CURRENT_USER) { return; }
    this.timer.start();
    this.router.route('main/index');
  },

});

var game = new bs.Game();


//gin.Class('bs.Game', {
//  settings: {},
//  router: hza.router,
//  loader: new hza.Component(), //TODO: define loader
//
//  init: function (settings) {
//    this.mainModel      = new hza.Model('main');
//    this.mainController = new hza.Controller('main', this.mainModel);
//    this.mainView       = new hza.View('main', this.mainController);
//    this.loginView      = new hza.View('login', this.mainController);
//    this.router.route('main/login');
//    gin.merge(this, settings);
//  },
//
//  load: function (view, components) {
//    //this.showLoader();
//    this._initInterface(view, [components]);
//    //this.hideLoader();
//  },
//
//  showLoader: function () {
//    this.loader.show();
//  },
//
//  hideLoader: function () {
//    this.loader.hide();          
//  },
//
//  _initInterface: function (view, components) {
//    for (var p in components) {
//      view.registerComponent(components[p]);
//    }
//  }
//
//
//});
//
//gin.ns('bs.components', {
//
//  splash: {
//    header: new hza.Component({
//      id: 'header', 
//      container: 'viewport',
//      dataHooks: {login: 'create/login'},
//      html: '<h1><ul><li id="login">login</li><li>signup</li></ul></h1>'
//    })
//  }
//
//});


//gin.ns('bs.components', {
//  splash: {
//    header: [
//      new hza.Component({id: 'header', html: new gin.html.Element('h1', {}, [
//        new gin.html.Element('ul', {id: 'primary-nav'}, [
//          new gin.html.Element('li', {id: 'login'}, ['login']).html,
//          new gin.html.Element('li', {}, ['register']).html
//        ]).html
//      ]).html, container: 'viewport', dataHooks: {login: 'create/login'}})
//    ]
//  }
//});

//var game = new bs.Game();
//game.load(game.loginView, bs.components.splash.header);
//game.loginView.render();
