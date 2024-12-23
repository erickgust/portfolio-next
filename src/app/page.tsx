import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
      </main>
      <footer>
        <div className="text-[#DCD7CD] text-center py-48">
          <p className="text-2xl mb-8">Let’s work together!</p>
          <p className="text-5.5xl text-transparent bg-gradient-to-r from-[#DCD7CD] to-[#E7BE6C] bg-clip-text">erickgus@gmail.com</p>
        </div>

        <div className="text-xs flex gap-1.5 text-[#57544E] items-center lowercase p-8 justify-center leading-none">
          <span className="pt-0.5">Developed by Erick</span>
          <Image
            aria-hidden
            src="/star.svg"
            alt="Star icon as a separator"
            width={14}
            height={14}
          />
          <span className="pt-0.5">Designed by Miel</span>
        </div>
      </footer>
    </div>
  );
}
