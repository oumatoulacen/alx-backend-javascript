const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  if (weakMap.endpoint >= 5) throw new Error('');
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}

export { queryAPI, weakMap };
