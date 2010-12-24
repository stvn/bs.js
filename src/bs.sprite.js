gin.Class('bs.Sprite', {
  id: null,
  settings: {},

  size:     {x: 16, y:16},
  offset:   {x:0, y:0},

  position: {x:0, y:0},
  lastPosition: {x: 0, y:0},
  
  zIndex:   0,

  animationSheet:        null,
  currentAnimationIndex: null,

  contextMenu: {},

  collides: 0,

  init: function (x, y, settings) {
    this.id = bs.repository._lastID + 1;
    this.position.x = x;
    this.position.y = y;
    gin.merge(this, settings);
    bs.repository.addEntry(this);
  },

  addAnimation: function () {
  
  },

  update: function () {
          
  },

  draw:  function () {
  
  },

  destroy: function () {
           
  },

  toString: function () {
            
  }
});

gin.Class('bs.Moveable', 'bs.Sprite', {
  friction:     {x: 0, y: 0},
  acceleration: {x: 0, y: 0},
  maxVelocity:  {x: 100, y: 100},
  gravity:      1,
  bounceFactor: 0,

  velocity: function () {
    var posX  = this.position.x,
        posY  = this.position.y,
        lastX = this.lastPosition.x,
        lastY = this.lastPosition.y;
   return {x: posX - lastX, y: posY - lastY};
  }
});

gin.Class('bs.Actor', 'bs.Moveable', {
  attributes: {},
  health: 0
});

//Non-Player Character
gin.Class('bs.NPC', 'bs.Actor', {
  dialogs: {} //TODO: implement dialog class
});

//Real-Player Character
gin.Class('bs.RPC', 'bs.Actor', {
    
});

var test;
