import { dedup } from "../../utils/array"

interface ObjectFieldType {
  _id: string
  name: string
}

export interface ObjectType {
  _id: string
  name: string
  fields: ObjectFieldType[]
}

export function dedupObjects(objects: ObjectType[]): ObjectType[] {
  return objects.filter(dedup(["name", "_id"])).map((object: ObjectType) => {
    return {
      ...object,
      fields: object.fields.filter(dedup(["name", "_id"])),
    }
  })
}
