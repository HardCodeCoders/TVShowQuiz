import axios from "axios";
import quizOptions from "./quiz-options";

class RMPanel extends quizOptions {
  constructor(questions) {
    super(questions);
  }

  // Get character form API
  async getCharacter(characterId) {
    if (characterId > this.questionsNum - 1) {
      characterId = characterId % (this.questionsNum - 1);
    }

    const userId = this.indexArray[characterId - 1];
    const response = {};

    const res = await axios(
      `https://rickandmortyapi.com/api/character/${userId}`
    );
    response.id = res.data.id;
    response.name = res.data.name;
    response.image = res.data.image;

    return response;
  }
}

export default RMPanel;
