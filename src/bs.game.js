gin.Class('bs.Game', {
  settings: {},

  loader : new hza.Component(), //TODO: define loader

  init: function (settings) {
    this.mainModel      = new hza.Model('main');
    this.mainController = new hza.Controller('main', this.mainModel);
    this.mainView       = new hza.View('main', this.mainController);
    this.loginView      = new hza.View('login', this.mainController); 
    gin.merge(this, settings);
  },

  load: function (components) {
    this.showLoader();
    this._initInterface(components);
    this.hideLoader();
  },

  showLoader: function () {
    this.loader.show();
  },

  hideLoader: function () {
    this.loader.hide();          
  },

  _initInterface: function (components) {
    for (var p in components) {
      this.view.registerComponent(components[p]);
    }
  }


});

