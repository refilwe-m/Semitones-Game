import JamBuddy from './src/semitone.js';
let buddy;
    const message = {
      correct: "You got it right .Well Done!",
      incorrect: "Wrong answer! Try again",
    };
    
    document
      .getElementById("btnGenerator")
      .addEventListener("click", ()=> {
        document.getElementsByTagName("h3")[0].innerHTML = "";
        document.getElementById("inputAnswer").value = "";
        buddy = new JamBuddy();
        const notes = buddy.selectNotes();
        let index1 = buddy.notes.indexOf(notes[0]);
        let index2 = buddy.notes.indexOf(notes[1]);
        if (index1 == -1 || index2 == -1) {
          for (const key in buddy.eqNotesObject) {
            if (buddy.eqNotesObject[key].includes(notes[0])) index1 = key;
            if (buddy.eqNotesObject[key].includes(notes[1])) index2 = key;
          }
        }
        document
          .getElementsByClassName("imgNote")[0]
          .setAttribute("src", `images/${index1}.png`);
        document
          .getElementsByClassName("imgNote")[1]
          .setAttribute("src", `images/${index2}.png`);
      });

    document
      .getElementById("submit")
      .addEventListener("click", ()=> {
        let inputAnswer = parseInt(
          document.getElementById("inputAnswer").value
        );
        
        document.getElementsByTagName("h3")[0].innerHTML =
          buddy.checkAnswer(inputAnswer)
            ? message.correct
            : message.incorrect;
      });

 