$(document).ready(function ()
{
    var $logoInner = $('#logo-inner');

    /***************************************************
     * LOGO
     **************************************************/
        //TweenMax.to($logo, 2, {opacity:1, delay:0, onComplete:function() {
        //}});

    setInterval(loop, 20);


    var count = 0;

    function loop()
    {

        var radius = 50;
        var left = Math.cos(count / 180 * Math.PI) * radius;
        var top = Math.sin(count / 180 * Math.PI) * radius;

        $logoInner.css({
            top: top + 'px',
            left: left + 'px'
        });

        count += 0.2;
        if (count > 360)count = 0;
    }


    /***************************************************
     * ANIMATION ELEMENTS
     **************************************************/
    var timeline = new TimelineMax({onComplete:function(){ timeline.restart();}});
    var $aniElements = $('#animation>div');


    for (var i = 0; i < $aniElements.length; i++)
    {
        var $elm = $($aniElements[i]);
        timeline.add(TweenMax.to($elm, 0.9, {left:'15%',ease: Elastic.easeOut.config(1, 0.5)}));
        timeline.add(TweenMax.to($elm, 1.5, {left:'110%',delay:2, ease:Elastic.easeIn.config(1, 1)}));
    }
    timeline.play();

    console.log($aniElements);
});