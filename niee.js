(function($){
	var showTime = function(option){
		var $this = $(option.this);
		var $startObj = $($this.selector); 
		$( $this ).each(function(idx,element){
			var start = $(element).data('start') ? new Date($(element).data('start')) : null ;
			var end = $(element).data('end') ? new Date($(element).data('end')) : null ;
			$(element).data('sort',idx);			
			if(!isShow(start,end)){
				$(element).detach();
			}else{
				if($.inArray(element,$startObj) > -1) $(element).show();
				else{
					var sort = $(element).data('sort');
					for(var i = 0 ; i < $startObj.length ; i ++){
						if( sort < $startObj.eq(i).data('sort')){
							$($startObj.eq(i)).before(element);
							break;
						}
					}
				}
			}			
		});
		var $afterObj = $($this.selector);
		if( $startObj.length != $afterObj.length )
			if(option.change)option.change($startObj,$afterObj);
	};
	
	var isShow = function(start, end){
		var now = new Date();
		if(start && end)
			return (start.getTime() <= now.getTime() && now.getTime() >= end.getTime);
		else if(start && !end)
			return (start.getTime() <= now.getTime());
		else if(!start && end)
			return (now.getTime() >= end.getTime);
		return true; 
	}
	
	$.fn.niee = function(option){
		if(!option)option={};
		if(option.before)option.before( this );
		option.this = this;
		option.autoLoad = option.autoLoad || false;
		showTime(option);
		if(option.after)option.after($(this.selector));
		if(option.autoLoad)
			setInterval(showTime , option.time || 1000 , option);
	};
})(jQuery)
