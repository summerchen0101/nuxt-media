<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="setting_content">
      <ul class="page_tabs">
        <li class="active" rel="tab1">
          个人资料
        </li>
        <li rel="tab2">
          修改密码
        </li>
      </ul>
      <div class="tab_container">
        <div id="tab1" class="tab_content">
          <Basic :form="form" />
        </div>
        <!-- #tab1 -->
        <div id="tab2" class="tab_content">
          <Password />
        </div>
        <!-- #tab2 -->
      </div>
      <!-- .tab_container -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {
    Basic: () => import('@/components/profile/Basic.vue'),
    Password: () => import('@/components/profile/Password.vue')
  },
  async asyncData ({ store, redirect }) {
    try {
      await store.dispatch('user/getProfile')
    } catch (err) {
      redirect({ name: 'index' })
    }
    return {
      form: Object.assign({}, store.state.user.profile)
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    jqFix()
  },
  methods: {
  },
  head () {
    return {}
  }
}

function jqFix () {
  /* imgLiquid */
  $('.imgLiquidFill').imgLiquid()

  /* tab accordion */
  $('.tab_content').hide()
  $('.tab_content:first').show()

  $('ul.page_tabs li').click(function () {
    $('.tab_content').hide()
    const activeTab = $(this).attr('rel')
    $('#' + activeTab).fadeIn()

    $('ul.page_tabs li').removeClass('active')
    $(this).addClass('active')
  })
  $('ul.page_tabs li')
    .last()
    .addClass('tab_last')
}
</script>
