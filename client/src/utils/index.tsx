import ChatBubbleSvg from "../images/ChatBubble.svg";
import PeopleGroupSvg from "../images/PeopleGroup.svg";
import OutlineUpvoteSvg from "../images/OutlineUpvote.svg";
import TokensSvg from "../images/Tokens.svg";
import ExpertSvg from "../images/Expert.svg";

export const server = "http://localhost:8080";

export type AboutDataProps = {
  count: number;
  text: string;
  icon: string;
  timesOneThousand?: boolean;
};

export type ExpertDataProps = {
  avatar?: string;
  title: string;
  upvotes: number;
  collected?: boolean;
};

export type ResponseDataProps = {
  title: string;
  question: string;
  username: string;
  answerCount: number;
  questionCount: number;
};

export const AboutData: AboutDataProps[] = [
  {
    count: 246,
    text: "Experts",
    icon: PeopleGroupSvg,
  },
  {
    count: 100,
    text: "Questions and Answers",
    icon: ChatBubbleSvg,
    timesOneThousand: true,
  },
  {
    count: 50,
    text: "Upvotes",
    icon: OutlineUpvoteSvg,
    timesOneThousand: true,
  },
  {
    count: 145,
    text: "Tokens Awarded",
    icon: TokensSvg,
  },
];

export const ExpertData: ExpertDataProps[] = [
  {
    avatar: ExpertSvg,
    title: "Pseudo Near Expert",
    upvotes: 47,
    collected: true,
  },
  {
    avatar: ExpertSvg,
    title: "Near Expert",
    upvotes: 47,
    collected: true,
  },
  {
    avatar: ExpertSvg,
    title: "Bitcoin Maxi",
    upvotes: 47,
    collected: true,
  },
  {
    avatar: ExpertSvg,
    title: "Ethereum Maxi",
    upvotes: 47,
    collected: true,
  },
];

export const ResponseData: ResponseDataProps[] = [
  {
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    question:
      "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    username: "Pseudo Near Expert",
    answerCount: 2,
    questionCount: 1,
  },
  {
    title: "MongoDB how to search by using regex but avoiding case sensitive?",
    question:
      "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap..",
    username: "Pseudo Near Expert",
    answerCount: 2,
    questionCount: 1,
  },
];
