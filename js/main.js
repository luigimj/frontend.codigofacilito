;(function() {

  let sticky = false
  let currentPosition = 0
  const imageCounter = $("[data-name='imageCounter']").attr('content')

  console.log(imageCounter)

  $("#stickyNavigation").slideUp(0)

  setInterval(()=>{
    if (currentPosition < imageCounter) {
      currentPosition++
    } else {
      currentPosition = 0
    }
    $("#gallery .inner").css({left: '-'+ currentPosition*100 +'%'})
  }, 3000)

  $(window).scroll(function() {
    const inBottom = isInBottom()

    if (inBottom && !sticky) {
      // Show stick navigation
      sticky = true
      stickNavigation()
    }
    if (!inBottom && sticky) {
      // Hide stick navigation
      sticky = false
      unStickNavigation()
    }
  })

  function stickNavigation () {
    $('#description').addClass('fixed').removeClass('absolute')
    $('#navigation').slideUp('fast');
    $('#stickyNavigation').slideDown('fast')
  }

  function unStickNavigation () {
    $('#description').removeClass('fixed').addClass('absolute')
    $('#navigation').slideDown('fast')
    $('#stickyNavigation').slideUp('fast')
  }

  function isInBottom() {
    const $description = $('#description')
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2.5);
  }

})()
