	//bar chart

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

$(document).ready(function(){

    window.chartHeight = Number($('.chart-area').height());
	window.barWidth = $('.chart-area .chart-bar').width();
	window.highestYlabel = Number($('.chart-y-axis p').first().html());
	window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
	window.chartScale = chartHeightArea / window.highestYlabel;
	window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    positionBars();
});

function positionBars(){

    $('.chart-area .chart-bar').each(function(index){
      var barPosition = (window.barWidth*index)+(index*barSpacing)+barSpacing;
		$(this).css('left',barPosition+'px');
		$(this).html('<p>'+$(this).attr('bar-value')+'</p>');
		$('.chart-x-axis').append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');
	
		var barValue = Number($(this).attr('bar-value'));
		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYlabel;
        }
    });
animateChart();
}

function animateChart(){

	$('.chart-area .chart-bar').each(function(index){
		var revisedValue = Number($(this).attr('bar-value'))*window.chartScale;
		var newDelay = 125*index;
		$(this).delay(newDelay).animate({height:revisedValue},1000, function(){
			$(this).children('p').delay(500).fadeIn(250);
		});
	});
	
	/* debug */ $('.valueMultiplier').html('valueMultiplier = '+window.valueMultiplier);
	/* debug */ $('.highestYlabel').html('highestYlabel = '+highestYlabel);
	/* debug */ $('.maxValue').html('maxValue = ' + window.maxValue);
	/* debug */ $('.chartHeight').html('chartHeight = '+window.chartHeight);
	/* debug */ $('.chartHeightArea').html('chartHeightArea = '+window.chartHeightArea);
	/* debug */ $('.chartScale').html('chartScale = '+window.chartScale);

}

//carousel

var startingItem = 3;

$(document).ready(function() {
	$('.data .item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
    showCaption();
 });

function createCarousel(){
    
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
createCustomButtons();
}


function createCustomButtons(){
    
$('.nextItem').click(function(){
    hideCaption();
      $('div#carousel').roundabout('animateToNextChild', showCaption);             
});
    $('.prevItem').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToPreviousChild', showCaption);
    });
    $('div#carousel img').click(function(){
        hideCaption();
    
    });
}
function showCaption(){
    var childInFocus = $('div#carousel').data('roundabout').childInFocus;
var setCaption = $('.data .item .caption:eq('+childInFocus+')').html();
    $('#text').html(setCaption);
    var newHeight =$('#text').height()+'px';
    $('.information').animate({'height':newHeight},500,function(){
        $('#text').animate({'opacity':1},250);
    });
}

function hideCaption(){
$('#text').animate({'opacity':0},250);
}

//Map



	//...................................................
	// When the form changes
	$('#mapForm').change(function() {
	
		var selectedContinent = $('#mapForm option:selected').val();
		if (selectedContinent == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.city_detail#' + $(this).attr('city');
		var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

//Animation

 $("#move").click(function() {
                $("#theDiv").animate({ left: "150" }, 1000, "easeOutBounce");
            });

