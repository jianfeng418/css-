window.onload = function(){

	[].slice.call(document.querySelectorAll('input[name=cssStyle]')).forEach(function(radioDom){
		radioDom.onclick = function(){
			[].slice.call(document.querySelectorAll('link')).forEach(function(linkDom){
				linkDom.setAttribute('rel','alternate stylesheet');
				linkDom.disabled = true;
			})

			document.querySelector('#'+this.value).setAttribute('rel','stylesheet');
			document.querySelector('#'+this.value).disabled = false;
		}
		
	})

}
