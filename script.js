document.getElementById("countButton").onclick = function() {
        
        let typedText = document.getElementById("textInput").value;
        typedText = typedText.toLowerCase();
        typedText = typedText.replace(/[^a-z'\s]+/g, "");
        letterCounts = {};
        

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
    
     words = typedText.split(/\s/)
 }