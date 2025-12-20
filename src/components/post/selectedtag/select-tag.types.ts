export interface SelectTagsProps {
  selectedTag: "All" | number
  setSelectedTag: (value: "All" | number) => void
}
