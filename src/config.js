gin.ns('bs.config', {
  serviceBaseURI: null,
  fps: 30
});

bs.LOGGED_IN = false;
bs.CURRENT_USER = null;

gin.ns('bs.assets', {
  loginForm: {
    domId: 'loginForm',
    html: '<form><input id="username" type="text"/><input id="password" type="password"/><input id="login-btn" type="button" value="Login"/></form>',
    script: function() {
      $('#login-btn').bind('click', function () {
        var username = $('#username').val(),
            password = $('#password').val();
        game.router.route('session/create', [username, password]);
      });
    }
  },

  viewport:  {
    domId: 'viewport',
    html: '<div></div>'
  }
});

