<template>
  <header class="header_box">
    <div class="container">
      <div class="navbar-hamburger">
        <span /> <span /> <span />
      </div>
      <NuxtLink class="logo" :to="{name: 'index'}">
        <img src="/images/logo.png" alt="">
      </NuxtLink>
      <nav class="menuBar">
        <div class="nav-content">
          <ul class="menu_list">
            <li>
              <NuxtLink :to="{name: 'Filter'}">
                <span><i class="icon-television" /></span><span>戏剧</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'Filter'}">
                <span><i class="icon-movie-symbol-of-video-camera" /></span><span>电影</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'Filter'}">
                <span><i class="icon-cartoons-character-with-big-eyes" /></span><span>动漫</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{name: 'Filter'}">
                <span><i class="icon-karaoke-microphone-icon" /></span><span>综艺</span>
              </NuxtLink>
            </li>
            <li>
              <a>
                <span><i class="icon-18" /></span><span>成人</span>
              </a>
              <span class="arr"><i class="fa fa-caret-down" /></span>
              <ul class="submenu_list">
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    长片
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    短片
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    自拍
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    写真
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    漫画
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    文学
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{name: 'Filter'}">
                    说书
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink :to="{name: 'Rank'}">
                <span><i class="icon-ranking" /></span><span>排行</span>
              </NuxtLink>
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
