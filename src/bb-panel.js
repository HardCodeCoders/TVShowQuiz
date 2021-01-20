import axios from "axios";
import quizOptions from "./quiz-options";

class BBPanel extends quizOptions {
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
      `https://breakingbadapi.com/api/characters/${userId}`
    );
    response.id = res.data[0].char_id;
    response.name = res.data[0].name;
    response.image = res.data[0].img;

    return response;
  }
}

export default BBPanel;
