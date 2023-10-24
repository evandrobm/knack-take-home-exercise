import { dedupSchema } from "."

const obj = { name: "test", _id: "123" }

describe("Entry Point Test", () => {
  const object1 = { ...obj, fields: [obj, obj] }
  const object2 = { ...obj, fields: [obj] }
  const scene1 = { ...obj, views: [obj, obj] }
  const scene2 = { ...obj, views: [obj] }

  const version1 = {
    status: "live",
    objects: [object1, object2],
    scenes: [scene1, scene2],
  }
  const version2 = {
    status: "not_live",
    objects: [object1, object2],
    scenes: [scene1, scene2],
  }

  const version1Deduped = {
    status: "live",
    objects: [object2],
    scenes: [scene2],
  }

  const schemaToTest = {
    versions: [version1, version2],
  }
  const schemaToValidate = {
    versions: [version1Deduped, version2],
  }

  test("Dedeup only the live version", () => {
    expect(dedupSchema(schemaToTest)).toStrictEqual(schemaToValidate)
  })
})
