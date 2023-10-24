import { dedupObjects } from "."

const fieldObject = { name: "test", _id: "123" }

describe("Objects Services", () => {
  const object1 = { ...fieldObject, fields: [fieldObject, fieldObject] }
  const object2 = { ...fieldObject, fields: [fieldObject] }

  test("Dedup objects", () => {
    const objectsToTest = [object2, object2]
    const objectsToValidate = [object2]

    const dedupedObjects = dedupObjects(objectsToTest)
    expect(dedupedObjects).toStrictEqual(objectsToValidate)
  })

  test("Dedup object fields", () => {
    const objectsToTest = [object1]
    const objectsToValidate = [object2]

    const dedupedObjects = dedupObjects(objectsToTest)
    expect(dedupedObjects).toStrictEqual(objectsToValidate)
  })
})
