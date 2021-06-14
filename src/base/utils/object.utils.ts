export class ObjectUtils {
  static cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
