<template>
  <Dialog v-model:visible="localVisible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
      <label for="username" class="font-semibold w-24">Username</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="closeModal"></Button>
      <Button type="button" label="Save" @click="closeModal"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { ref, watch } from 'vue'

const props = defineProps<{
  visible: boolean
  type: 'login' | 'register'
}>()

const emit = defineEmits(['closeModal', 'update:visible'])

const closeModal = () => {
  emit('closeModal')
  localVisible.value = false
}

const localVisible = ref(props.visible)

watch(
  () => props.visible,
  (newVal: boolean) => {
    localVisible.value = newVal
  }
)

watch(localVisible, (newVal) => {
  emit('update:visible', newVal)
})
</script>

<style lang="scss" scoped></style>
