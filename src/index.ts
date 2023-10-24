import fs from "fs"
import { dedupObjects, ObjectType } from "./services/objects"
import { dedupScenes, SceneType } from "./services/scenes"

interface Schema {
  versions: {
    status: string
    objects: ObjectType[]
    scenes: SceneType[]
  }[]
}

// Function to handle the deduplication of the schema
export function dedupSchema(schema: Schema): Schema {
  return {
    ...schema,
    versions: schema.versions.map((version) => {
      if (version.status === "live") {
        return {
          ...version,
          objects: dedupObjects(version.objects),
          scenes: dedupScenes(version.scenes),
        }
      }

      return version
    }),
  }
}

// Main Execution of the process
// TODO: don't read and write the file synchronously
const schema = JSON.parse(fs.readFileSync("mock_application.json", "utf8"))
const dedupedSchema = dedupSchema(schema)
fs.writeFileSync(
  "clean_application.json",
  JSON.stringify(dedupedSchema, null, 2)
)
