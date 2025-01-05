import Image from "next/image";
import { EmailText } from "./EmailText";

export function EmailButton() {
  return (
    <button className="flex rounded-full border py-2 px-4 gap-2.5 items-center justify-center leading-none">
      <Image
        aria-hidden
        src="/email.svg"
        alt="Email icon"
        width={14}
        height={14}
        priority
      />
      <EmailText>erick.prussak@gmail.com</EmailText>
    </button>
  );
}
