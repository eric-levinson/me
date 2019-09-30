new WOW().init();
$('.header').parallax({imageSrc: 'res/city.jpg'});
$('.project-sec').parallax({imageSrc: 'res/fog4.png'});
$('.about-sec').parallax({imageSrc: 'res/fog3.png'});
$('.contact-sec').parallax({imageSrc: 'res/ocean.jpeg'});
$('#bdbutton').popover({
  html : true, 
  content: function() {
    return $('#tl1').html();
  } 
});
$('#tbbutton').popover({
  html : true, 
  content: function() {
    return $('#tl2').html();
  } 
});
$('#chcbutton').popover({
  html : true, 
  content: function() {
    return $('#tl3').html();
  } 
});
$('#owbutton').popover({
  html : true, 
  content: function() {
    return $('#tl4').html();
  } 
});
/*document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "an avid coffee drinker.", "a stickler for perfection.", "a lifelong learner.", "a designer of usable web apps."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h3").innerHTML = 'Hello, my name is Eric and I am ' + text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1200);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});*/