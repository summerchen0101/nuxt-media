<template>
  <header class="header_box">
    <div class="container">
      <div class="navbar-hamburger">
        <span /> <span /> <span />
      </div>
      <nuxt-link class="logo" :to="{name: 'index'}">
        <img src="/images/logo.png" alt="">
      </nuxt-link>
      <nav class="menuBar">
        <div class="nav-content">
          <ul class="menu_list">
            <li>
              <nuxt-link :to="{name: 'tv-filter'}">
                <span><i class="icon-television" /></span><span>戏剧</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter'}">
                <span><i class="icon-movie-symbol-of-video-camera" /></span><span>电影</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter'}">
                <span><i class="icon-cartoons-character-with-big-eyes" /></span><span>动漫</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter'}">
                <span><i class="icon-karaoke-microphone-icon" /></span><span>综艺</span>
              </nuxt-link>
            </li>
            <li>
              <a>
                <span><i class="icon-18" /></span><span>成人</span>
              </a>
              <span class="arr"><i class="fa fa-caret-down" /></span>
              <ul class="submenu_list">
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    长片
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    短片
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    自拍
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    写真
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    漫画
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    文学
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'tv-filter'}">
                    说书
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-rank'}">
                <span><i class="icon-ranking" /></span><span>排行</span>
              </nuxt-link>
            </li>
            <li>
              <a data-toggle="modal" data-target="#searchModal"><span><i class="fa fa-search" /></span><span>搜寻</span></a>
            </li>
            <li v-if="isLogin" class="login-img show-pc">
              <a>
                <b class="img" style="background-image:url(/images/member/member_bigImg.jpg)" />
                <span>会员</span>
                <i class="arr-icon fa fa-caret-down" />
              </a>
              <div class="dropdown">
                <a href="record.html">观看纪录</a>
                <a href="collect.html">我的收藏</a>
                <a href="message.html">我的消息</a>
                <a href="setting.html" class="select">帐号设置</a>
                <a href="" @click.prevent="$store.dispatch('user/logout')">登出</a>
              </div>
            </li>
            <li v-else>
              <a class="fancybox" href="#login_dialog"><span><i class="icon-user" /></span><span>登入</span></a>
            </li>
          </ul><a />
        </div>
      </nav>
      <!--nav end-->
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {},
  computed: {
    ...mapGetters({
      isLogin: 'user/login'
    })
  },
  mounted () {}
}
</script>
