<template>
  <div class="mermaid">
    <div class="mermaid-svg" v-if="svg" v-html="svg"></div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
export default {
  name: "Mermaid",
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return 'diagram_'+Date.now()
      }
    },
  },
  data () {
    return {
      svg: undefined
    }
  },
  computed: {
    source() {
      console.log(this.$slots.default()[0])
      return this.$slots.default()[0].children.reduce((acc, e) => {
        if (e.type === "br") return acc
        return `${acc}\n${e.children}`
      }, "")
    }
  },
  mounted() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });

      console.log(this.source)
      m.render(
          this.id,
          this.source,
          (svg) => {
            this.svg = svg
          }
      )
    });
  },
};
</script>

<style scoped>

</style>
