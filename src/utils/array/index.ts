type KeyOfType<T> = keyof T & (string | number | symbol)

export function dedup<T>(propertiesToFind: KeyOfType<T>[]) {
  return (item: T, index: number, array: T[]) =>
    index ===
    array.findIndex((t: T) =>
      propertiesToFind.some((property) => t[property] === item[property])
    )
}
