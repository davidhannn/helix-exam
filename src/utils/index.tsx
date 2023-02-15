import ChatBubbleSvg from "../images/ChatBubble.svg";
import PeopleGroupSvg from "../images/PeopleGroup.svg";
import UpvoteSvg from "../images/Upvote.svg";
import TokensSvg from "../images/Tokens.svg";

type AboutDataProps = {
  count: number;
  text: string;
  icon: string;
  timesOneThousand?: boolean;
};

type ExpertDataProps = {
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
    icon: UpvoteSvg,
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
    title: "Pseudo Near Expert",
    upvotes: 47,
    collected: true,
  },
  {
    title: "Near Expert",
    upvotes: 47,
    collected: true,
  },
  {
    title: "Bitcoin Maxi",
    upvotes: 47,
    collected: true,
  },
  {
    title: "Ethereum Maxi",
    upvotes: 47,
    collected: true,
  },
];
