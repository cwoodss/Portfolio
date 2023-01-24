$(function() {
    console.log('yo')

    var details = ['The Antidote for Everything', 'Paris Trip 🛫', 'Yoga', 'Ceramics', 'The Great Pottery Throwdown 🏺', 'Fortnite'];
    var detailsContainer = $('.js-details-container');

    var options = {
        strings: ['reading', 'planning', 'learning', 'practicing', 'watching', 'playing'],
        typeSpeed: 80,
        loop: true,
        loopCount: Infinity,     
        showCursor: true, 
        backDelay: 2000,
        onStringTyped: function(arrayPos, self) {
            // console.log(arrayPos);
            var text = details[arrayPos];

            detailsContainer.html(
                '<span class="fade-in">'+ text +'</span>'
            );
        },
    };
      
    new Typed('.js-typing-headlines', options);

    // $(window).on('mousemove', function(e) {
    //     var friction = .5;
    //     var x = e.clientX * friction;
    //     var y = e.clientY * friction;

    //     var animation = anime({
    //         targets: 'path',
    //         translateY: anime.stagger([y, y + 200]),
    //         translateX: anime.stagger([x, x + 200]),
    //         duration: 0,
    //         easing: 'linear',
    //         delay: anime.stagger(100) 
    //       });
    // });
});