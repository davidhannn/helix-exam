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
