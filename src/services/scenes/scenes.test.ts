import { dedupScenes } from "."

const viewObject = { name: "test", _id: "123" }

describe("Scenes Services", () => {
  const scene1 = { ...viewObject, views: [viewObject, viewObject] }
  const scene2 = { ...viewObject, views: [viewObject] }

  test("Dedup scenes", () => {
    const scenesToTest = [scene2, scene2]
    const scenesToValidate = [scene2]
    const dedupedScenes = dedupScenes(scenesToTest)

    expect(dedupedScenes).toStrictEqual(scenesToValidate)
  })

  test("Dedup scene views", () => {
    const scenesToTest = [scene1]
    const scenesToValidate = [scene2]
    const dedupedScenes = dedupScenes(scenesToTest)

    expect(dedupedScenes).toStrictEqual(scenesToValidate)
  })
})
