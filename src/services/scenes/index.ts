import { dedup } from "../../utils/array"

interface SceneViewType {
  _id: string
  name: string
}

export interface SceneType {
  _id: string
  name: string
  views: SceneViewType[]
}

export function dedupScenes(scenes: SceneType[]): SceneType[] {
  return scenes.filter(dedup(["name", "_id"])).map((object: SceneType) => {
    return {
      ...object,
      views: object.views.filter(dedup(["name", "_id"])),
    }
  })
}
