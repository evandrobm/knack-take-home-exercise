import { dedup } from "."

describe("Array Dedup utility function", () => {
  const dedupFn = dedup(["name", "_id"])

  test("Dedup call returns a function", () => {
    expect(typeof dedupFn).toBe("function")
  })

  test("Dedup function returned should filter duplicated values", () => {
    const objToTest = { name: "test", _id: "123" }
    const arrayToCompare = [objToTest, objToTest]
    const arrayToValidate = [objToTest]

    expect(arrayToCompare.filter(dedupFn)).toStrictEqual(arrayToValidate)
  })
})
