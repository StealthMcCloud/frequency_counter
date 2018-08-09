document.getElementById("countButton").onclick = function() {
        
        let typedText = document.getElementById("textInput").value;
        typedText = typedText.toLowerCase();
        typedText = typedText.replace(/[^a-z'\s]+/g, "");
        // typedWords = typedWords.toLowerCase();
        words = typedText.split(/\s/);
        letterCounts = {};
        wordCounts = {};
        

    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        
    
     if(letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1;
     } else {
        letterCounts[currentLetter]++;
     }
     }
    
     for(let letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
     }
     

     for(let x = 0; x < words.length; x++) {
        currentWord = words[x];
    
     if(wordCounts[currentWord] === undefined) {
        wordCounts[currentWord] = 1;
     } else {
        wordCounts[currentWord]++;
     }
     
     }


     for(let word in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
     }
    
 }