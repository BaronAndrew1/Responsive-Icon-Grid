var hoverTarget = $('li');

hoverTarget.on("mouseover", function() {
    $(this).find($('.bar-blue')).removeClass('active');
    $(this).find($('.bar-white')).addClass('active');
    $(this).css('transition-duration','1s').css("background-color","#47a3da")
    $(this).find($('i')).css('transition-duration','1s').css("color","white")
    $(this).find($('h1')).css('transition-duration','1s').css("color","white")

  });
hoverTarget.on("mouseout", function() {
    $(this).find($('.bar-blue')).addClass('active');
    $(this).find($('.bar-white')).removeClass('active');
    $(this).css("background-color","white")
    $(this).find($('i')).css("color","#47a3da")
    $(this).find($('h1')).css("color","#47a3da")
  });
