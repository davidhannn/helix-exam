import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Question } from "../entity/Question";

export const getQuestions = async (req: Request, res: Response) => {
  // const newQuestion = new Question();
  // newQuestion.title = "yo";
  // newQuestion.text = "test";
  // newQuestion.author = "heaheah";
  // newQuestion.answers = 3;
  // newQuestion.questions = 2;

  // await AppDataSource.manager.save(newQuestion);

  // console.log("new question id", newQuestion.id);

  res.json("questions");
  console.log("getting questions!");
};

export const submitQuestion = async (req: Request, res: Response) => {
  const { title, questionText } = req.body;
  const questionRepo = AppDataSource.getRepository(Question);

  const question = new Question();
  question.title = title;
  question.text = questionText;

  await questionRepo.save(question);
  const savedquestions = await questionRepo.find();
  console.log(savedquestions, "saved question");
};
