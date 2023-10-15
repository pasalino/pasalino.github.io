import Link from "next/link";
import { GitHubIcon } from "./social-icons/github-icon";
import { LinkedinIcon } from "./social-icons/linkedin-icon";
import { MediumIcon } from "./social-icons/medium-icon";

export const SocialBar = () => (
  <div className="bg-blue rounded-b-lg flex flex-row min-h-[50px] justify-center items-center fill-white">
    <>
      <Link
        href={"https://github.com/pasalino"}
        target="_blank"
        className=" fill-white"
        title="GitHub"
      >
        <GitHubIcon />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/pasalino/"}
        target="_blank"
        className=" fill-white"
        title="Linkedin"
      >
        <LinkedinIcon />
      </Link>
      <Link
        href={"https://medium.com/@pasalino"}
        target="_blank"
        className=" fill-white"
        title="Medium"
      >
        <MediumIcon />
      </Link>
    </>
  </div>
);
