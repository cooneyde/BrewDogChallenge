import {isArray, isObject} from 'util';
import {Method} from './method';


const initialState = 'IDLE';

export class MethodListBuilder {

  constructor() {
  }


  /**
   * Flattens the method object in the response from the GET beer API. This will return an array of Method objects
   * @param methodList
   */
  static buildMethodList(methodList) {
    let list: Method[] = [];

    Object.keys(methodList).forEach((name) => {

      const typeObject = methodList[name];

      if (isArray(typeObject)) {
        typeObject.forEach((item) => {

          let method: Method = item;
          method.name = name;
          method.buttonState = initialState;

          list.push(method);

        });
      } else if (isObject(typeObject)) {

        let method: Method = typeObject;
        method.name = name;
        method.buttonState = initialState;

        list.push(method);
      } else {
        const method = new Method(null, name, null, typeObject, null);
        list.push(method);
      }
    });
    return list;
  }
}
