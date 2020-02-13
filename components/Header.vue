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
            <li><a id="loginBtn" class="login" href="#login_dialog"><span><i class="icon-user" /></span><span>登入</span></a></li>
          </ul><a />
        </div>
      </nav>
      <!--nav end-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  mounted () {}
}
</script>
