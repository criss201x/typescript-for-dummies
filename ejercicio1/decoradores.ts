class MyClass {
  @log
  myMethod(arg: string) {
    return "Message -- " + arg;
  }
} 

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor) {
  const originalMethod = descriptor.value; // save a reference to the original method // NOTE: Do not use arrow syntax here. Use a function expression in // order to use the correct value of `this` in this method (see notes below) descriptor.value = function(...args: any[]) { // pre console.log("The method args are: " + JSON.stringify(args)); // run and store result const result = originalMethod.apply(this, args); // post console.log("The return value is: " + result); // return the result of the original method (or modify it before returning) return result; }; return descriptor; 
} 


class MyClass {
  @enumerable
    (false) get prop() {
      return true;
    }
}

function enumerable(isEnumerable: boolean) {
  return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor) => {
    descriptor.enumerable = isEnumerable; return descriptor;
  };
} 