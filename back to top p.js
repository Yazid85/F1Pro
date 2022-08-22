/* Back To Top Progress */
  	var prPt = document.querySelector(".toTopB circle.c"),
  	     ptLh = prPt.getTotalLength();

  	prPt.style.transition = prPt.style.WebkitTransition = 'none';
  	prPt.style.strokeDasharray = ptLh + ' ' + ptLh;
  	prPt.style.strokeDashoffset = ptLh;
  	prPt.getBoundingClientRect();
  	var updateProgress = function() {
  		var scroll = document.documentElement.scrollTop;
  		var height = document.documentElement.scrollHeight - window.innerHeight;
  		var progress = ptLh - (scroll * ptLh / height);
  		prPt.style.strokeDashoffset = progress;
        var scrolled = (scroll / height) * 100;
        document.getElementById("progBr").style.width = scrolled + "%";
    }
  	updateProgress();
  	window.addEventListener('scroll', (updateProgress));

  	window.onscroll = function() {
       var yzTp = document.querySelector('.toTopB');
  		 if (document.documentElement.scrollTop > 50) {
  			yzTp.classList.add('vsbl');
  		} else {
  			yzTp.classList.remove('vsbl');
  		}
  	};
