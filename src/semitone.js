export default class JamBuddy {
  constructor() {
    this.eqNotesObject = {
      1: ["A#", "Bb"],
      4: ["C#", "Db"],
      6: ["D#", "Eb"],
      9: ["F#", "Gb"],
      11: ["G#", "Ab"],
    };
    this.notes = [
      "A",
      this.eqNotesObject[1],
      "B",
      "C",
      this.eqNotesObject[4],
      "D",
      this.eqNotesObject[6],
      "E",
      "F",
      this.eqNotesObject[9],
      "G",
      this.eqNotesObject[11],
    ];

    this.selections = [];
  }

  selectNotes() {
    while (this.selections.length != 2) {
      let randNum = randomize(0, 11);
      if (randNum in this.eqNotesObject)
        this.selections.push(this.eqNotesObject[randNum][randomize(0, 1)]);
      else this.selections.push(this.notes[randNum]);
    }

    return this.selections;
  }

  getAnswer() {
    let start = this.notes.indexOf(this.selections[0]);
    let targetPos = this.notes.indexOf(this.selections[1]);
    let answer = 0;

    if (start == -1 || targetPos == -1) {
      for (const key in this.eqNotesObject) {
        if (this.eqNotesObject[key].includes(this.selections[0])) start = key;
        if (this.eqNotesObject[key].includes(this.selections[1]))
          targetPos = key;
      }
    }
    if (start == targetPos) return 0;
    if (targetPos > this.start) return targetPos - start;

    for (let i = start; i < this.notes.length - 1; i++) {
      if (i != targetPos) answer++;
      else break;
    }

    return (answer += targetPos + 1);
  }

  checkAnswer(answer) {
    return answer == this.getAnswer();
  }
}
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

