document.getElementById('answer1').addEventListener('mouseover', function() {
    this.textContent = 'Boleh Kok';
});

document.getElementById('answer2').addEventListener('mouseover', function() {
    this.textContent = 'Boleh Kok';
});

document.getElementById('answer1').addEventListener('mouseout', function() {
    this.textContent = 'Ga tau';
});

document.getElementById('answer2').addEventListener('mouseout', function() {
    this.textContent = 'Ga';
});

document.getElementById('answer1').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('answer2').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
});
