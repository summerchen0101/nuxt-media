<template>
  <header class="header_box">
    <div class="container">
      <div class="navbar-hamburger">
        <span /> <span /> <span />
      </div>
      <router-link class="logo" :to="{name: 'Home'}">
        <img src="/images/logo.png" alt="">
      </router-link>
      <nav class="menuBar">
        <div class="nav-content">
          <ul class="menu_list">
            <li>
              <router-link :to="{name: 'Filter'}">
                <span><i class="icon-television" /></span><span>戏剧</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'Filter'}">
                <span><i class="icon-movie-symbol-of-video-camera" /></span><span>电影</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'Filter'}">
                <span><i class="icon-cartoons-character-with-big-eyes" /></span><span>动漫</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'Filter'}">
                <span><i class="icon-karaoke-microphone-icon" /></span><span>综艺</span>
              </router-link>
            </li>
            <li>
              <a>
                <span><i class="icon-18" /></span><span>成人</span>
              </a>
              <span class="arr"><i class="fa fa-caret-down" /></span>
              <ul class="submenu_list">
                <li>
                  <router-link :to="{name: 'Filter'}">
                    长片
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    短片
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    自拍
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    写真
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    漫画
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    文学
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Filter'}">
                    说书
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link :to="{name: 'Rank'}">
                <span><i class="icon-ranking" /></span><span>排行</span>
              </router-link>
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
