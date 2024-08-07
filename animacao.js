document.getElementById('powerButton').addEventListener('click', function() {
    var animation = document.getElementById('animation');
    var scenes = document.getElementsByClassName('scene');
    if (animation.style.display === 'none' || animation.style.display === '') {
        animation.style.display = 'block';
        for (var i = 0; i < scenes.length; i++) {
            scenes[i].style.display = 'block';
        }
    } else {
        animation.style.display = 'none';
        for (var i = 0; i < scenes.length; i++) {
            scenes[i].style.display = 'none';
        }
    }
});