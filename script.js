const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  //==============================================================
  //❓Create a new speech recognition
  //==============================================================
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";          // Set language to English
    recognition.continuous = true;       // Keep listening until stopped
    recognition.interimResults = true;   // Show partial results while speaking

  //==============================================================
  //❓Start recognition when "#startBtn" button is clicked
  //==============================================================
    document.querySelector("#startBtn").addEventListener("click", () => {
      recognition.start(); // Start listening
      document.querySelector("#startBtn").style.display = "none"; // Hide button after click
    });

  //==============================================================
  //✅ Define keywords and what happens when they are spoken
  //==============================================================
    const keywords = {
      "Donuts": () => {
        document.querySelector("#mainText").className = "variable2";
        document.body.style.backgroundColor = "#86f5ff";
        document.body.style.backgroundImage = "url('./img/donut.jpg')"
      },
      "sweetness": () =>  {
        document.querySelector ("#mainText").className = "variable2";
        document.body.style.backgroundColor = "#86f5ff";
        document.body.style.backgroundImage = "url('./img/sweet.jpg')"
      },
      "space": () => {
         document.querySelector ("#mainText").className = "variable2";
         document.body.style.backgroundColor = "#75ff75";
         document.body.style.backgroundImage = "url('./img/space.jpg')"
      },
      "the universe": () => {
         document.querySelector ("#mainText").className = "variable2";
         document.body.style.backgroundColor = "#75ff75";
         document.body.style.backgroundImage = "url('./img/universe.jpg')"
      },
      "seashells": () => {
         document.querySelector ("#mainText").className = "variable2";
         document.body.style.backgroundColor = "#75ff75";
         document.body.style.backgroundImage = "url('./img/shell.jpg')"
      },
      "pink shells": () => {
         document.querySelector ("#mainText").className = "variable2";
         document.body.style.backgroundColor = "#75ff75";
         document.body.style.backgroundImage = "url('./img/pink.jpg')"
      },
    };

  //==============================================================
  //❓Process recognized speech results
  //==============================================================
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      document.querySelector("#mainText").textContent = transcript; // Show what user said
      const lowerTranscript = transcript.toLowerCase();
      for (const key in keywords) { 
        if (lowerTranscript.includes(key.toLowerCase())) { // Check if keyword is spoken
          document.querySelector("#mainText").textContent = key; // Display the keyword
          keywords[key](); // Run the keyword action
          break; // Stop checking after first match
        }
      }
    };

  //==============================================================
  //❓Restart recognition automatically when it ends
  //==============================================================
    recognition.onend = () => {
      recognition.start();
    };

  //==============================================================
}
