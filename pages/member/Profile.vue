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
          <form class="form-horizontal contact_form">
            <div class="setting_upload_img_box row">
              <div class="col-xs-12 col-md-2 setting_upload_img">
                <img src="/images/member/setting_upload_img.png" alt="">
              </div>
              <div class="col-xs-12 col-md-10 setting_upload_txt">
                <button class="setting_upload_img_btn">
                  选择照片上传
                </button>
                <div class="setting_upload_img_note">
                  支持JPG、JPEG、GIF、PNG格式，图片不得超过2M
                </div>
              </div>
            </div>
            <div class="form-group setting_group">
              <label for="user_id" class="control-label">帐号</label>
              <div>
                <input id="user_id" type="text" class="form-control">
              </div>
            </div>
            <div class="form-box-column">
              <div class="form-group left_group">
                <label for="name" class="control-label">暱称</label>
                <div>
                  <input id="name" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group right_group">
                <label class="control-label">性别</label>
                <div class="sex_box">
                  <span><input id="sex1" type="radio" name="optionsRadios" value="option2">男</span>
                  <span><input id="sex2" type="radio" name="optionsRadios" value="option2">女</span>
                </div>
              </div>
            </div>
            <div class="form-box-column">
              <div class="form-group left_group">
                <label for="email" class="control-label">信箱</label>
                <div>
                  <input id="email" type="email" class="form-control">
                </div>
              </div>
              <div class="form-group right_group">
                <label for="phone" class="control-label">手机</label>
                <div>
                  <input id="phone" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="form-box-column">
              <div class="form-group left_group">
                <label for="birth" class="control-label">生日</label>
                <div>
                  <input id="birth" type="email" class="form-control">
                </div>
              </div>
              <div class="form-group right_group">
                <label for="place" class="control-label">居住地</label>
                <div>
                  <select id="place" name="">
                    <option value="">
                      请选择省份
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="msg" class="control-label">简介</label>
              <div>
                <textarea id="msg" class="form-control" rows="6" />
              </div>
            </div>
            <div class="form-group">
              <div class="page_form_btn">
                <button type="submit" class="btn save_btn">
                  储存设置
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- #tab1 -->
        <div id="tab2" class="tab_content">
          <form class="form-horizontal contact_form pw_form">
            <div class="form-group">
              <label for="old_pw" class="control-label">旧密码</label>
              <div>
                <input id="old_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="new_pw" class="control-label">新密码</label>
              <div>
                <input id="new_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="check_pw" class="control-label">确认密码</label>
              <div>
                <input id="check_pw" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="page_form_btn">
                <button type="submit" class="btn save_btn">
                  储存设置
                </button>
              </div>
            </div>
          </form>
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
  data () {
    return {}
  },
  mounted () {
    this.$mixin.loadScript('/js/script.js')
  }
}
</script>
