document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const name1 = document.getElementById('name1').value.trim().toLowerCase();
        const name2 = document.getElementById('name2').value.trim().toLowerCase();

        if (name1 === '' || name2 === '') {
            alert('Please enter both names!');
            return;
        }


        let score = calculateLoveScore(name1, name2);

        displayResult(score);
    });

    function calculateLoveScore(n1, n2) {
        let combined = n1 + n2;
        let sum = 0;
        for (let i = 0; i < combined.length; i++) {
            sum += combined.charCodeAt(i);
        }

        // Use a deterministic seed-like approach
        let score = (sum % 101);

        // Ensure some variety and "magic"
        if (n1 === n2) score = 100;
        if ((n1.includes('hitesh') && n2.includes('partner')) || (n2.includes('hitesh') && n1.includes('partner'))) {
            score = 99; // Easter egg
        }

        return score;
    }

    function displayResult(score) {
        let message = "";
        if (score > 90) message = "Perfect Match! ❤️";
        else if (score > 70) message = "Great Chemistry! 🔥";
        else if (score > 50) message = "Dynamic Duo! ✨";
        else if (score > 30) message = "Potential is there... 🌱";
        else message = "Maybe as friends? 🤝";

        resultDiv.innerHTML = `
            <span class="score-number">${score}%</span>
            <span class="message">${message}</span>
        `;
    }
});