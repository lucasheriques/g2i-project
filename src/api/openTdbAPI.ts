import Axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Payload {
  response_code: number;
  results: Question[];
}

export async function getQuestions() {
  const { data } = await Axios.get<Payload>(url);

  return data.results;
}
