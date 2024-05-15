// script for the animation of the return button
window.addEventListener('scroll', function() {
    var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    
    if (scrollPercent > 40) {
      var returnButton = document.getElementById('return-button');
      returnButton.style.display = 'block';
      returnButton.style.animation = 'slideInRight 0.5s ease forwards';
    } else {
      document.getElementById('return-button').style.display = 'none';
    }
  });


// script for the animation of the gif text
