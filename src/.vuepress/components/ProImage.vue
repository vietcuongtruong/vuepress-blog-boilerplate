<template>
  <div class="placeholder"
    :data-large="lazySrc"
    :style="style"
  >
  <img :src="smallSrc" class="img-small">
  <div style="padding-bottom: 66.6%;"></div>
</div>
  <!-- <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :style="style"
    class="AppImage"
  > -->
</template>

<script>
// window.onload = function() {

//   var placeholder = document.querySelector('.placeholder'),
//       small = placeholder.querySelector('.img-small')
  
//   // 1: load small image and show it
//   var img = new Image();
//   img.src = small.src;
//   img.onload = function () {
//   small.classList.add('loaded');
//   };
  
//   // 2: load large image
//   var imgLarge = new Image();
//   imgLarge.src = placeholder.dataset.large; 
//   imgLarge.onload = function () {
//     imgLarge.classList.add('loaded');
//   };
//   placeholder.appendChild(imgLarge);
// };


import lozad from 'lozad';

export default {
  name: 'ProImage',
  props: {
    backgroundColor: {
      type: String,
      default: '#efefef',
    },
    height: {
      type: Number,
      default: null,
    },
    lazySrc: {
      type: String,
      default: null,
    },
    lazySrcset: {
      type: String,
      default: null,
    },
    smallSrc: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    aspectRatio() {
      // Calculate the aspect ratio of the image
      // if the width and the height are given.
      if (!this.width || !this.height) return null;

      return (this.height / this.width) * 100;
    },
    style() {
      // The background color is used as a
      // placeholder while loading the image.
      // You can use the dominant color of the
      // image to improve perceived performance.
      // See: https://manu.ninja/dominant-colors-for-lazy-loading-images/
      const style = { backgroundColor: this.backgroundColor };

      if (this.width) style.width = `${this.width}px`;

      // If the image is still loading and an
      // aspect ratio could be calculated, we
      // apply the calculated aspect ratio by
      // using padding top.
      const applyAspectRatio = this.loading && this.aspectRatio;
      if (applyAspectRatio) {
        // Prevent flash of unstyled image
        // after the image is loaded.
        style.height = 0;
        // Scale the image container according
        // to the aspect ratio.
        style.paddingTop = `${this.aspectRatio}%`;
      }

      return style;
    },
  },
  mounted() {
    // As soon as the <img> element triggers
    // the `load` event, the loading state is
    // set to `false`, which removes the apsect
    // ratio we've applied earlier.
    const setLoadingState = () => {
      this.loading = false;
    };
    this.$el.addEventListener('load', setLoadingState);
    // We remove the event listener as soon as
    // the component is destroyed to prevent
    // potential memory leaks.
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', setLoadingState);
    });

    // We initialize Lozad.js on the root
    // element of our component.
    const observer = lozad(this.$el);
    observer.observe();
  },
};

</script>

<style lang="stylus">
// Responsive image styles.
.placeholder
  background-color: #f6f6f6
  background-size: cover
  background-repeat: no-repeat
  position: relative
  overflow: hidden

.placeholder img
  position: absolute
  opacity: 0
  top: 0
  left: 0
  width: 100%
  transition: opacity 1s linear


.placeholder img.loaded
  opacity: 1


.img-small
  filter: blur(50px)
  /* this is needed so Safari keeps sharp edges */
  transform: scale(1)
</style>