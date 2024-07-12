function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; 
    let regex = /^pet_[a-zA-Z0-9]+$/;

    if (input.match(regex)) {
        result = 'Valid syntax!';
    } else {
        result = 'Invalid syntax, please try again!';
    }
    
    document.getElementById('result').innerText = result; // Moved outside the else block
}