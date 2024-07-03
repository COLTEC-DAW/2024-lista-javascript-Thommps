function toList(array) {
    if (array.length === 0) {
      return null;
    }
    
    return {
      value: array[0],
      rest: toList(array.slice(1))
    };
}