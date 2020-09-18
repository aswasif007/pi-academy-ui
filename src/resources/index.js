class Data {
  get SCHEMA() {
    return {};
  }

  get ENDPOINT() {
    return '';
  }

  constructor(fields) {
    for (const [key, value] of Object.entries(fields)) {
      if (!this.SCHEMA.hasOwnProperty(key)) { throw `Field '${key}' is not defined.`; }
      if ([String, Number, Date].includes(this.SCHEMA[key])) {
        this[key] = new this.SCHEMA[key](value);
      } else {
        this[key] = new this.SCHEMA[key](...value);
      }
    }
  }

  save() {
    throw 'Method not implemented';
  }

  delete() {
    throw 'Method not implemented';
  }

  refresh() {
    throw 'Method not implemented';
  }

  static create() {
    throw 'Method not implemented';
  }

  static get() {
    throw 'Method not implemented';
  }
};

export default Data;
