const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let queries = weakMap.get(endpoint) || 0;

  queries += 1;

  weakMap.set(endpoint, queries);

  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }

  return queries;
};

export { weakMap, queryAPI };
