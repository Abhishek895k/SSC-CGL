 // Show first overlay
 document.getElementById('maths-btn').addEventListener('click', function () {
    document.getElementById('overlay-1').classList.add('show');
});

// Close first overlay
document.getElementById('close-overlay-1').addEventListener('click', function () {
    document.getElementById('overlay-1').classList.remove('show');
});

// Show second overlay when "NUMBER SYSTEM" button is clicked
document.getElementById('number-system-btn').addEventListener('click', function () {
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-2').classList.add('show');
});

// Close second overlay and return to the first overlay
document.getElementById('back-overlay-2').addEventListener('click', function () {
    document.getElementById('overlay-2').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show third overlay when "Simplification" button is clicked
document.getElementById('simplification-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-3').classList.add('show');
});

//Close third overlay and return to the first overlay
document.getElementById('back-overlay-3').addEventListener('click', function(){
    document.getElementById('overlay-3').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

    //Show fourth overlay when "Surd & indices" button is clicked
document.getElementById('surds_indices-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-4').classList.add('show');
});

//Close fourth overlay and return to the first overlay
document.getElementById('back-overlay-4').addEventListener('click', function(){
    document.getElementById('overlay-4').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show fifth overlay when "Algebra" button is clicked
document.getElementById('algebra-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-5').classList.add('show');
});

//Close fifth overlay and return to the first overlay
document.getElementById('back-overlay-5').addEventListener('click', function(){
    document.getElementById('overlay-5').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show sixth overlay when "Quadratic Equation" button is clicked
document.getElementById('quadratic_equation-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-6').classList.add('show');
});

//Close sixth overlay and return to the first overlay
document.getElementById('back-overlay-6').addEventListener('click', function(){
    document.getElementById('overlay-6').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show sevent overlay when "Percentage" button is clicked
document.getElementById('percentage-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-7').classList.add('show');
});

//Close sevent overlay and return to the first overlay
document.getElementById('back-overlay-7').addEventListener('click', function(){
    document.getElementById('overlay-7').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show eigth overlay when "Ratio" button is clicked
document.getElementById('ratio-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-8').classList.add('show');
});

//Close eigth overlay and return to the first overlay
document.getElementById('back-overlay-8').addEventListener('click', function(){
    document.getElementById('overlay-8').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show ninth overlay when "Profit & Loss" button is clicked
document.getElementById('profit_loss-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-9').classList.add('show');
});

//Close ninth overlay and return to the first overlay
document.getElementById('back-overlay-9').addEventListener('click', function(){
    document.getElementById('overlay-9').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show tenth overlay when "Discount" button is clicked
document.getElementById('discount-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-10').classList.add('show');
});

//Close tenth overlay and return to the first overlay
document.getElementById('back-overlay-10').addEventListener('click', function(){
    document.getElementById('overlay-10').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show elevent overlay when "Compound Interest" button is clicked
document.getElementById('compound_interest-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-11').classList.add('show');
});

//Close elevent overlay and return to the first overlay
document.getElementById('back-overlay-11').addEventListener('click', function(){
    document.getElementById('overlay-11').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show twelfth overlay when "Simple Interest" button is clicked
document.getElementById('simple_interest-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-12').classList.add('show');
});

//Close twelfth overlay and return to the first overlay
document.getElementById('back-overlay-12').addEventListener('click', function(){
    document.getElementById('overlay-12').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});

//Show thirteen overlay when "Simple Interest" button is clicked
document.getElementById('installment-btn').addEventListener('click', function(){
    document.getElementById('overlay-1').classList.remove('show');
    document.getElementById('overlay-13').classList.add('show');
});

//Close thirteen overlay and return to the first overlay
document.getElementById('back-overlay-13').addEventListener('click', function(){
    document.getElementById('overlay-13').classList.remove('show');
    document.getElementById('overlay-1').classList.add('show');
});





window.addEventListener('load', function () {
    // Hide the loader
    document.getElementById('loader').style.display = 'none';
});
