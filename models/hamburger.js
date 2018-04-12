var orm = require("../config/orm.js");

var burger = {
  all: function(searchAll) {
    orm.all("burgers", function(res) {
      searchAll(res);
    });
  },
  
  create: function(col, value, create) {
    orm.create("burgers", col, value, function(res) {
      create(res);
    });
  },

  update: function(columnValue, param, update) {
    orm.update("burgers", objColVals, param, function(res) {
      update(res);
    });
  }
};

module.exports = burger;