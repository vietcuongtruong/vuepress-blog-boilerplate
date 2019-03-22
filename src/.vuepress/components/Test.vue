<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
// import { resolvePage, normalize, outboundRE, endingSlashRE } from '../theme/util'

export default {
  name: 'Test',
  // props: ['sidebarItems']
}

// function resolvePrev (page, items) {
//   return find(page, items, -1)
// }

// function resolveNext (page, items) {
//   return find(page, items, 1)
// }

// function find (page, items, offset) {
//   const res = []
//   items.forEach(item => {
//     if (item.type === 'group') {
//       res.push(...item.children || [])
//     } else {
//       res.push(item)
//     }
//   })
//   for (let i = 0; i < res.length; i++) {
//     const cur = res[i]
//     if (cur.type === 'page' && cur.path === page.path) {
//       return res[i + offset]
//     }
//   }
// }
</script>

<style lang="stylus">
@import '../theme/styles/config.styl'
@import '../theme/styles/custom-layout.styl'
</style>
