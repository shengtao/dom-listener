(function ($) {
    setInterval(function () {
        var currentRMB = $('.lightorange1').html();

        console.log(currentRMB);

        if (currentRMB) {
            play();
        }
    }, 1000)

    function play()
    {
        var embed=document.createElement('object');
        embed.setAttribute('type','audio/ogg');
        embed.setAttribute('data', 'http://www.w3schools.com/tags/horse.ogg');
        embed.setAttribute('autostart', true);
        document.getElementsByTagName('body')[0].appendChild(embed);
    }
})(jQuery)