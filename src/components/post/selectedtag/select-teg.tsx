import { useEffect, useState } from "react"
import styles from "./select-tag.module.css"
import { SelectTagsProps } from "./select-tag.types"
import { Tag } from "../../../shared/types/types"

export function SelectTags({selectedTag,setSelectedTag,}: SelectTagsProps) {
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getTags() {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:8001/tags", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data: Tag[] = await response.json()
        setTags(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false)
      }
    }

    getTags()
  }, [])

  if (loading) 
    return <div>𝙇𝙤𝙖𝙙𝙞𝙣𝙜...</div>
  if (error) 
    return <p>{error}</p>

  return (
    <div className={styles.tag}>
      <label>
        <input
          type="radio"
          value="All"
          checked={selectedTag === "All"}
          onChange={() => setSelectedTag("All")}
        />
        All
      </label>

      {tags.map(tag => (
        <label key={tag.id}>
          <input
            type="radio"
            checked={selectedTag === tag.id}
            onChange={() => setSelectedTag(tag.id)}
          />
          {tag.name}
        </label>
      ))}
    </div>
  )
}
