const NOT_IMPLEMENTED = 'method not implemented';

class Data {
  get SCHEMA() {
    return {};
  }

  get ENDPOINT() {
    return '';
  }

  constructor(fields) {
    fields = {
      guid: `${Math.random()}`,
      ...fields,
    };

    for (const [key, value] of Object.entries(fields)) {
      if (!this.SCHEMA.hasOwnProperty(key)) { throw `Field '${key}' is not defined.`; }

      const Type = this.SCHEMA[key];

      if ([Number, Date].includes(Type)) {
        this[key] = new Type(value);

      } else if(Type.prototype instanceof Data) {
        const obj = new Type(value);
        const guidKey = `${key}__guid`;
        this[guidKey] = obj.guid;

        Object.defineProperty(this, key, {
          get: () => Type.getFromVuex(this[guidKey]),
        });

      } else if (Type.prototype instanceof DataList) {
        const ElemType = Type.Type;
        const objs = value.map(item => new ElemType(item));
        const guidKey = `${key}__guids`;
        this[guidKey] = objs.map(obj => obj.guid);

        Object.defineProperty(this, key, {
          get: () => this[guidKey].map(guid => ElemType.getFromVuex(guid)),
        });

      } else {
        this[key] = value;
      }
    }

    this.setToVuex();
  }

  get vuexStore() {
    throw NOT_IMPLEMENTED;
  }

  get vuexState() {
    throw NOT_IMPLEMENTED;
  }

  get vuexMutation() {
    throw NOT_IMPLEMENTED;
  }

  static getFromVuex(guid) {
    return this.prototype.vuexStore.state[this.prototype.vuexState][guid];
  }

  setToVuex() {
    this.vuexStore.commit(this.vuexMutation, [this])
  }

  update() {
    throw NOT_IMPLEMENTED;
  }

  delete() {
    throw NOT_IMPLEMENTED;
  }

  reload() {
    throw NOT_IMPLEMENTED;
  }

  static create() {
    throw NOT_IMPLEMENTED;
  }

  static getOne() {
    throw NOT_IMPLEMENTED;
  }

  static getMany() {
    throw NOT_IMPLEMENTED;
  }
};

class DataList extends Array {
  static get Type() {
    return Data;
  }
}

export { Data, DataList };
