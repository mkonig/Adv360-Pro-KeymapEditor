
<template>
  <div class="layer">
    <key-thing
      v-for="(key, i) in layout"
      :key="i"
      :position="position(key)"
      :rotation="rotation(key)"
      :size="size(key)"
      :label="key.label"
      :value="normalized[i].value"
      :params="normalized[i].params"
      @update="handleUpdateBind(i, $event)"
      @add-custom-key="addCustomKey"
      @add-custom-behavior="addCustomBehavior"
    />
  </div>
</template>

<script>
import Key from './key.vue'

export default {
  props: ['layout', 'keys'],
  emits: ['update', 'add-custom-key', 'add-custom-behavior'],
  components: {
    'key-thing': Key,
  },
  computed: {
    normalized() {
      return this.layout.map((_, i) => (
        this.keys[i] || {
          value: '&none',
          params: []
        }
      ))
    }
  },
  methods: {
    position(key) {
      const { x, y } = key
      return { x, y }
    },
    rotation(key) {
      const { rx, ry, r } = key
      return { x: rx, y: ry, a: r }
    },
    size(key) {
      const { w = 1, u = w, h = 1 } = key
      return { u, h }
    },
    handleUpdateBind(keyIndex, updatedBinding) {
      this.$emit('update', [
        ...this.normalized.slice(0, keyIndex),
        updatedBinding,
        ...this.normalized.slice(keyIndex + 1)
      ])
    },
    addCustomKey(newKey) {
      this.$emit('add-custom-key', newKey)
    },
    addCustomBehavior(newBehavior) {
      this.$emit('add-custom-behavior', newBehavior)
    }
  }
}
</script>

<style>
.layer {
  position: relative;
}
</style>