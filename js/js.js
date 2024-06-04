document.getElementById('calculateBtn3').addEventListener('click', function() {
    var amount = parseFloat(document.getElementById('amountInput').value);
    var interestRate = parseFloat(document.getElementById('intInput').value);

    let interest = (amount * interestRate) / 100;

    document.getElementById('interestResult').textContent = interest.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function() {

    document.getElementById('amountInput').value = '';
    document.getElementById('intInput').value = '';
    document.getElementById('interestResult').textContent = '';
});