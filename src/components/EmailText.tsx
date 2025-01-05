"use client";

type EmailTextProps = {
  children: string;
};

export function EmailText({ children }: EmailTextProps) {
  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Email copied to clipboard");
    } catch {
      console.error("Failed to copy email to clipboard");
    }
  }

  return (
    <span
      className="pt-0.5"
      onClick={(e) => {
        copyToClipboard(e.currentTarget.innerText);
      }}
    >
      {children}
    </span>
  );
}
