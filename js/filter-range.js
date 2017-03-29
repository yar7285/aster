$("#slider").slider({
    min: 2000,
    max: 2017,
    values: [2000,2017],
    range: true,
    stop: function(event, ui) {     jQuery("input.range-from").val(jQuery("#slider").slider("values",2000));
    jQuery("input.range-to").val(jQuery("#slider").slider("values",2017));
    }, slide: function(event, ui){
    jQuery("input.range-from").val(jQuery("#slider").slider("values",0));
    jQuery("input.range-to").val(jQuery("#slider").slider("values",1));
    }
});
var $j = $('.ui-slider-handle');
console.log('j=',$j);

jQuery("input.range-from").change(function(){
    var value1=jQuery("input.range-from").val();
    var value2=jQuery("input.range-to").val();
    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input.range-from").val(value1);
    }
    jQuery("#slider").slider("values",2000,value1); 
});
jQuery("input.range-to").change(function(){
    var value1=jQuery("input.range-from").val();
    var value2=jQuery("input.range-to").val();
    if (value2 > 2017) { value2 = 2017; jQuery("input.range-to").val(2017)}
    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input.range-to").val(value2);
    }
    jQuery("#slider").slider("values",1,value2);
});
