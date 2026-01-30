import { CliOutput } from "@/components/elements/cli-output";

const usageOutput = [
  "packs                              \x1b[90m# browse\x1b[0m",
  "packs get commit-message           \x1b[90m# install\x1b[0m",
  "packs submit @user/skill           \x1b[90m# share\x1b[0m",
];

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full text-center">
        <pre className="text-primary text-sm sm:text-lg md:text-2xl font-medium leading-tight mb-6">
{`                    __        
    ____  ____ _____/ /_______
   / __ \\/ __ \`/ __/ //_/ ___/
  / /_/ / /_/ / /_/ ,< (__  ) 
 / .___/\\__,_/\\__/_/|_/____/  
/_/                           `}
        </pre>
        
        <p className="text-muted-foreground text-lg mb-6">
          Skills for AI agents. One command.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
            Coming Soon
          </div>
          <code className="text-muted-foreground text-xs">
            <span className="opacity-60">#</span> brew install packs
          </code>
        </div>
        
        <CliOutput 
          output={usageOutput}
          prompt="$"
          showControls={true}
          autoScroll={false}
          className="text-left mb-8"
        />
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://github.com/tunajam/packs-registry" 
            className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse Packs
          </a>
          <a 
            href="https://github.com/tunajam/packs" 
            className="bg-muted border border-border text-foreground px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            GitHub
          </a>
        </div>
        
        <div className="mt-16 text-muted-foreground text-sm">
          Built by{" "}
          <a href="https://github.com/hsbacot" className="hover:text-primary transition-colors">
            Hunter
          </a>{" "}
          &{" "}
          <a href="https://x.com/FredTheOwl_" className="hover:text-primary transition-colors">
            Fred
          </a>{" "}
          🎒
        </div>
      </div>
    </main>
  );
}
