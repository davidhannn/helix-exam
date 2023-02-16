import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Question } from "../entity/Question";

export const getQuestions = async (req: Request, res: Response) => {
  const newQuestion = new Question();
  newQuestion.title = "yo";
  newQuestion.text = "test";
  newQuestion.author = "heaheah";
  newQuestion.answers = 3;
  newQuestion.questions = 2;

  await AppDataSource.manager.save(newQuestion);

  console.log("new question id", newQuestion.id);

  res.json("questions");
  console.log("getting questions!");
};
