(function() {
  var game;
  var ui;

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var save = function() {
      var saveString = JSON.stringify(window.dendryUI.dendryEngine.getExportableState());
      localStorage['nye2019_save_1'] = saveString;
      window.alert("Saved.");
  };

  var load = function() {
      if (localStorage['nye2019_save_1']) {
          var saveString = localStorage['nye2019_save_1'];
          window.dendryUI.dendryEngine.setState(JSON.parse(saveString));
          window.alert("Loaded.");
      } else {
          window.alert("No save available.");
      }
  };

  var showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('stats')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('stats');
    }
  };

  window.dendryModifyUI = main;
  window.dendrySave = save;
  window.dendryLoad = load;
  window.showStats = showStats;
}());
