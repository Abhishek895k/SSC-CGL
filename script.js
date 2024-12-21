
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
   