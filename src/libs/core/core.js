class Core {
  constructor() {
    this.plugins = {};
  }

  hasPlugin(name) {
    return Boolean(this.plugins[name]);
  }

  setPlugin(name, plugin) {
    this.plugins[name] = plugin;
  }

  removePlugin(name) {
    delete this.plugins[name];
  }

  getPlugin(name) {
    return this.plugins[name];
  }
}

window.App = window.App ?? {};
window.App.core = window.App.core ?? new Core();

export default window.App.core;
