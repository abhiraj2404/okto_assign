import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen bg-gradient-to-br from-fd-primary/10 via-fd-secondary/10 to-fd-primary/5 py-12 px-4">
      {/* Container for Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="mb-8 text-4xl font-bold bg-gradient-to-r from-fd-primary to-fd-primary/50 bg-clip-text text-transparent">
          The Okto Layer: Unlocking a New Era of Chain Abstraction
        </h1>
        <p className="text-xl text-fd-muted-foreground max-w-5xl mx-auto leading-relaxed">
          The Okto Layer simplifies blockchain interactions by abstracting the
          complexities of multi-chain transactions. Whether you're a developer
          or an end-user, Okto lets you build and use Web3 applications
          seamlessly.
        </p>

        <div className="flex gap-6 justify-center py-8">
          <Link
            href="/docs/guide/quickstart"
            className="bg-fd-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-fd-primary/90 transition-all transform hover:scale-105 shadow-lg dark:bg-fd-primary/100 dark:text-white dark:hover:bg-fd-primary/80"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="bg-white text-fd-foreground px-8 py-4 rounded-xl font-semibold hover:bg-fd-secondary/10 transition-all transform hover:scale-105 shadow-lg border border-fd-primary/20 dark:bg-fd-secondary dark:text-white dark:hover:bg-fd-secondary/80"
          >
            View Docs
          </Link>
        </div>

        <div className="mb-10">
          <Image
            src="https://static.wixstatic.com/media/9ffdd4_5e3fefa3bfaf41c4aaa6b458a260b4d2~mv2.png/v1/fill/w_925,h_485,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/9ffdd4_5e3fefa3bfaf41c4aaa6b458a260b4d2~mv2.png"
            width={800}
            height={800}
            alt="Okto Layer"
            className="rounded-xl mx-auto shadow-2xl border-2 border-fd-primary/20"
          />
        </div>

        {/* Additional Link */}
        <p className="text-fd-muted-foreground mt-12">
          You can also explore the{" "}
          <Link
            href="https://docs.okto.tech"
            className="text-fd-foreground font-semibold underline hover:text-fd-primary transition-colors"
          >
            old documentation
          </Link>{" "}
          for more details.
        </p>
      </div>
    </main>
  );
}
