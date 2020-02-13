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
$('ul.page_tabs li').last().addClass('tab_last')

/* qa */
$('.qa_box > a').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
    $(this).siblings('.qa_content').slideUp(200)
    $('.qa_box > a i').removeClass('fa-caret-down').addClass('fa-caret-down')
  } else {
    $('.qa_box > a i').removeClass('fa-caret-down').addClass('fa-caret-down')
    $(this).find('i').removeClass('fa-caret-down')
    $('.qa_box > a').removeClass('active')
    $(this).addClass('active')
    $('.qa_content').slideUp(200)
    $(this).siblings('.qa_content').slideDown(200)
  }
})
/* login dialog */
$('.login').fancybox({
  wrapCSS: 'fancybox-login',
  padding: 40,
  width: 800,
  maxWidth: '100%',
  helpers: {
    overlay: {
      css: {
        background: 'rgba(0,0,0,.8)'
      }
    }
  }
})
/* reg login forget_pw change */
$(function () {
  $('#login_dialog #registered_dialog_inner, #registered_dialog #login_dialog_inner2, #forget_pw_dialog_inner, #forget_pw_dialog_inner2').hide()
  $('#loginBtn').click(function () {
    $('#forget_pw_dialog_inner').css('display', 'none')
    $('#login_dialog_inner').show()
  })
  $('#regBtn').click(function () {
    $('#forget_pw_dialog_inner2').css('display', 'none')
    $('#registered_dialog_inner2').show()
  })
  $('#go_reg, #go_reg2').click(function () {
    $('#registered_dialog_inner, #registered_dialog_inner2').show()
    $('#login_dialog_inner, #login_dialog_inner2').hide()
  })
  $('#go_log, #go_log2').click(function () {
    $('#login_dialog_inner, #login_dialog_inner2').show()
    $('#registered_dialog_inner, #registered_dialog_inner2').hide()
  })
  $('#go_forgetPw, #go_forgetPw2').click(function () {
    $('#forget_pw_dialog_inner, #forget_pw_dialog_inner2').show()
    $('#login_dialog_inner, #login_dialog_inner2').hide()
  })
})
/* scrollTop */
$(function () {
  $('.scrollTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow')
    return false
  })
})
$(function () {
  $('.fixed_list li a[href^=#]:not([href=#])').click(function () {
    const target = $(this.hash)
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 1000)
    return false
  })
})

$('.banner-box').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
/* tv_list */
$('.tv_list, .index_cartoons_list, .index_smovie_list').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})
/* page sideBar */
$(document).ready(function () {
  const trigger = $('.hamburger')
  const overlay = $('.overlay')
  let isClosed = false

  trigger.click(function () {
    hamburger_cross()
  })
  overlay.click(function () {
    hamburger_cross()
  })
  function hamburger_cross () {
    if (isClosed == true) {
      overlay.hide()
      trigger.removeClass('is-open')
      trigger.addClass('is-closed')
      isClosed = false
    } else {
      overlay.show()
      trigger.removeClass('is-closed')
      trigger.addClass('is-open')
      isClosed = true
    }
  }
  $('[data-toggle="offcanvas"], .overlay').click(function () {
    $('#wrapper').toggleClass('toggled')
  })
})
/* index_menu */
$(document).ready(function () {
  $('.navbar-hamburger').click(function () {
    $('.nav-content').toggleClass('visible')
    $('.menuBg').toggleClass('cover-bg')
    $('body').toggleClass('menu_open_body')
  })
  $('.menuBg').click(function () {
    $('.nav-content').removeClass('visible')
    $('.menuBg').removeClass('cover-bg')
    $('body').toggleClass('menu_open_body')
  })
  wdth = $(window).width()
  leftPos = ($('.menuBar').width() - $('.container').width())
  $('.nav-content li ul.dropdown').width(wdth).css({ left: -leftPos / 2, 'padding-left': leftPos / 2 })
})

$(document).ready(function () {
  if ($(window).width() < 900) {
    $('.menu_list > li').click(function () {
      $(this).find('ul').slideToggle('medium')
    })
  }
  $('.login-img.show-mb').click(function () {
    $('.dropdown').fadeToggle()
  })
})
