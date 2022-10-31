export function proxyClassForORM(klass: any) {
  return new Proxy(klass, {
    apply(target, thisArg, rest) {
      return new target(...rest);
    },
  });
}

