<template>
  <div class="page_fixedSlide">
    <a class="scrollTop"><i class="fa fa-caret-up" />TOP</a>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  components: {},
  mounted () {
    $('.scrollTop').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 'slow')
      return false
    })
  }
}
</script>
