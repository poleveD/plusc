const isEmpty = test => {
  if (test === null) return true;
  if (test === undefined) return true;

  return false;
}

export {
  isEmpty
}