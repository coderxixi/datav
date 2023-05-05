import { ref, onMounted } from "vue"

export function usePositioning() {
  const rootRef = ref(null);
  onMounted(() => {
   
  })
  return rootRef
}