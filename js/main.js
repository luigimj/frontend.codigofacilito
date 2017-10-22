;(function() {
  
  let sticky = false
  //$("#sticky-navigation").removeClass('hidden')
  $("#stickyNavigation").slideUp(0)

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
    $('#navigation').slideUp('fast')
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

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2);
  }

})()