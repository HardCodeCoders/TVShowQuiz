class QuizOptions {
  constructor(questions) {
    this.questionsNum = questions;
    this.indexArray = [];

    this.createIndexArray(questions);
  }

  // Generate unique random numbers between 0 and num
  createIndexArray(num) {
    while (this.indexArray.length < num) {
      const r = Math.floor(Math.random() * num);
      if (this.indexArray.indexOf(r) === -1) this.indexArray.push(r);
    }
  }

  // Draw random question
  drawAnswers(question) {
    const response = [];
    const answers = [];

    // get correct answer
    const correct = this.getCharacter(question);
    answers.push(question);

    // random wrong answers
    while (answers.length < 4) {
      const r = Math.floor(Math.random() * this.questionsNum);
      if (answers.indexOf(r) === -1) answers.push(r);
    }

    // generate final response
    response[0] = correct;
    response[1] = this.getCharacter(answers[1]);
    response[2] = this.getCharacter(answers[2]);
    response[3] = this.getCharacter(answers[3]);

    return response;
  }

  shuffledArray(arr) {
    const arrCopy = [...arr];
    const newOrder = [];

    for (let i = 4; i > 0; i--) {
      const r = Math.floor(Math.random() * i);
      let res = arrCopy.splice(r, 1);
      newOrder.push(res[0]);
    }

    return newOrder;
  }
}

export default QuizOptions;
