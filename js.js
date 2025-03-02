function generatePassword() {
    // input from the user is taken
    
    const length = document.getElementById('length').value;
    const includeAlphabets = document.getElementById('IncludeAlphabets').checked;
    const includeNumbers = document.getElementById('IncludeNumbers').checked;
    const includeSpecialChars = document.getElementById('IncludeSpecialChars').checked;
  
    // The different characters that can be added are
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/|{}[]:;,.';
  if(length<8)
  {
    alert('Password must contain atleast 8 characters');
  }
    // Create password by clicking different boxes
    let charPool = '';
    if (includeAlphabets) {
      charPool += alphabets;
    }
    if (includeNumbers) {
      charPool += numbers;
    }
    if (includeSpecialChars) {
      charPool += specialChars;
    }
  
    if (charPool === '') {
      alert('Please select at least one character type!');
      return;
    }
  
    // Generating password
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
    
  
    // Displaying the generated password
    document.getElementById('generatedPassword').textContent = password;
    
  }
  