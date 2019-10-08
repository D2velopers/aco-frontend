export function getStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return null;
}

export function setStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
