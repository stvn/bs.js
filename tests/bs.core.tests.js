TestCase('bs.core', {
  'test should be defined': function () {
    assertObject(bs); 
  },

  'test should create new sprite object': function () {
    var sprite = new bs.Sprite(5, 5, {});
    assertObject(sprite);
  },

  'test should create a new moveable object': function () {
    var sprite = new bs.Moveable(5, 5, {});
    assertObject(sprite);
  },

  'test should create a new actor object': function () {
    var actor = new bs.Actor(5, 5, {});
    assertObject(actor);
  },

  'test should create a new npc object': function () {
    var npc = new bs.NPC(5, 5, {});
    assertObject(npc);
  },

  'test should create a new rpc object': function () {
    var rpc = new bs.RPC(5, 5, {});
    assertObject(rpc);
  }  
});
