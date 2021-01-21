import axios from "axios";
import quizOptions from "./quiz-options";

class GOTPanel extends quizOptions {
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
      `https://thronesapi.com/api/v2/Characters/${userId}`
    );
    response.id = await res.data.id;
    response.name = await res.data.fullName;
    response.image = await res.data.imageUrl;

    return response;
  }
}

export default GOTPanel;
