class Bus {
  constructor(){
    this._events = new Map();
  }

  trigger(eventName, data) {
    const eventCallbacks = this._events.get(eventName);

    if (!eventCallbacks) return;

    eventCallbacks.forEach(cb => cb(data));
  }

  removeEventListener(eventName, listener) {
    const eventCallbacks = this._events.get(eventName);

    if (!eventCallbacks) return;

    eventCallbacks.delete(listener);
  }

  addEventListener(eventName, callback) {
    if (typeof callback !== 'function') {
      throw new Error('callback must be a function!');
    }

    if (typeof eventName !== 'string') {
      throw new Error('eventName must be a string!');
    }

    eventName = eventName.trim();
    if (eventName.length === 0) {
      throw new Error('eventName cannot be empty string');
    }

    const eventCallbacks = this._events.get(eventName) ?? new Set();
    eventCallbacks.add(callback);

    this._events.set(eventName, eventCallbacks);
  }
}

export default new Bus();
