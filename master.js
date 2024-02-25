<script>
	function include(file) {
	
	var script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;
	
	document.getElementsByTagName('head').item(0).appendChild(script);
	
	}
	
	/* Include Many js files */
	include('https://cdn.jsdelivr.net/gh/jotowibowo/pakcat@master/main.js');
	include('https://cdn.jsdelivr.net/gh/jotowibowo/pakcat@master/main1.js');
</script>
