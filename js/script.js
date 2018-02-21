//gallery
		var th = document.getElementById('thumbnails');
		th.addEventListener('click', function(e) {
 		var t = e.target, new_src = t.parentNode.href, 
      	large = document.getElementById('large'),
      	cl = large.classList,
      	lgwrap = document.getElementById('lg-wrap');
  		lgwrap.style.backgroundImage = 'url(' +large.src + ')';
  			if(cl) cl.add('hideme');
  		window.setTimeout(function(){
   		large.src = new_src;
    		if(cl) cl.remove('hideme');
  			}, 50);
  			e.preventDefault();
			}, false);


//tubs
		var tubs = document.getElementById('tubs');
		tubs.addEventListener('click', function(e){
		let num = e.target.dataset.num;
		document.querySelectorAll('div').forEach(el=>{
			if(el.dataset.num===num){
				el.classList.add('active');
				}
				else{
				el.classList.remove('active');
				}
			});
		});


//Small menu
    jQuery('.page-header__toggler').on('click', function() {
        jQuery('.small-menu').toggleClass('active-t');     
    });
	