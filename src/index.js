window.FramelessFrame = function (requestConfig) {
  const remote = require('electron').remote
  
  const defaultConfig = {
    theme: 'ff-sierra'
  }

  const config = requestConfig || defaultConfig

  const hasOwnProperty = Object.prototype.hasOwnProperty

  for(var key in defaultConfig) {
    if (!config.hasOwnProperty(key)) {
      config[key] = defaultConfig[key]
    }
  }

  function init (config) {
    initializeStyles(config.theme)
    initializeEvents()
  }

  var initializeStyles = function (theme) {
    const themeName = theme || 'ff-default'
    addClassToTitleBar(themeName)
    arrangeButtonOrder(themeName)
  }

  var addClassToTitleBar = function (className) {
    if (document.body.classList) {
      document.body.classList.add(className);
    } else {
      document.body.className += ' ' + className;
    }
  }

  var arrangeButtonOrder = function (themeName) {
    var closeButtonElement = document.getElementById('close-btn')
    var titleBarElement = document.getElementById('title-bar-btns')

    switch (themeName) {
      case 'ff-sierra': 
        titleBarElement.prepend(closeButtonElement)
      break
    }
  }

  var initializeEvents = function () {
    document.getElementById('min-btn').addEventListener('click', function (e) {
      const window = remote.getCurrentWindow()
      window.minimize()
    })

    document.getElementById('max-btn').addEventListener('click', function (e) {
      const window = remote.getCurrentWindow()
      if (!window.isMaximized()) {
        window.maximize()
      } else {
        window.unmaximize()
      }
    })

    document.getElementById('close-btn').addEventListener('click', function (e) {
      const window = remote.getCurrentWindow()
      window.close()
    })
  }

  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      init(config)
    }
  }
}
