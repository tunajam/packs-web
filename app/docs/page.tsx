import { CopyCommand } from "@/components/elements/copy-command";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { href: "#install", label: "Installation" },
  { href: "#usage", label: "Usage" },
  { href: "#github", label: "GitHub Fetch" },
  { href: "#types", label: "Pack Types" },
  { href: "#create", label: "Creating Packs" },
  { href: "#submit", label: "Submit" },
  { href: "#auth", label: "Authentication" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-semibold hover:opacity-80 transition-opacity">
            packs
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/docs" className="text-foreground">Docs</a>
            <a href="https://github.com/tunajam/packs-registry" className="hover:text-foreground transition-colors">
              Registry
            </a>
            <a href="https://github.com/tunajam/packs" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12 py-12">
          {/* Sidebar */}
          <aside className="hidden md:block w-48 shrink-0">
            <nav className="sticky top-24 space-y-1">
              <p className="text-sm font-medium mb-3">On This Page</p>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
              <p className="text-lg text-muted-foreground">
                Learn how to install and use packs to supercharge your AI agents.
              </p>
            </div>

            <Separator className="my-8" />

            {/* Install */}
            <section className="scroll-mt-24" id="install">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Installation</h2>
              <p className="text-muted-foreground mb-4">
                Install the packs CLI using Homebrew.
              </p>
              <CopyCommand command="brew install tunajam/tap/packs" />
              <p className="text-sm text-muted-foreground mt-4">
                Supports macOS and Linux. The CLI is a single binary with no dependencies.
              </p>
            </section>

            <Separator className="my-10" />

            {/* Usage */}
            <section className="scroll-mt-24" id="usage">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Usage</h2>
              <p className="text-muted-foreground mb-6">
                The CLI provides a few simple commands to discover and install packs.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">Browse</h3>
                    <Badge variant="secondary" className="text-xs">Interactive</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Launch the TUI to explore packs visually.
                  </p>
                  <CopyCommand command="packs" />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Search</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Find packs by keyword, tag, or description.
                  </p>
                  <CopyCommand command="packs find <query>" />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Install</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fetch a pack and output its contents. Pipe to your agent or save to a file.
                  </p>
                  <CopyCommand command="packs get <name>" />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Inspect</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    View metadata and details about a pack.
                  </p>
                  <CopyCommand command="packs info <name>" />
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* GitHub Fetch */}
            <section className="scroll-mt-24" id="github">
              <h2 className="text-xl font-semibold tracking-tight mb-4">GitHub Fetch</h2>
              <p className="text-muted-foreground mb-4">
                Fetch packs directly from any GitHub repository—public or private.
              </p>
              <CopyCommand command="packs get gh:user/repo/path/to/pack" />
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Tip:</span> Run{" "}
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded">packs login</code> to access private repositories.
                </p>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Pack Types */}
            <section className="scroll-mt-24" id="types">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Pack Types</h2>
              <p className="text-muted-foreground mb-6">
                Packs come in two types, each serving a different purpose.
              </p>
              
              <div className="grid gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">Skills</h3>
                    <Badge>SKILL.md</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step workflows and processes. How to debug, how to write commits, how to review code.
                  </p>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">Contexts</h3>
                    <Badge>CONTEXT.md</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reference material and best practices. Framework patterns, API conventions, language idioms.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Creating Packs */}
            <section className="scroll-mt-24" id="create">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Creating Packs</h2>
              <p className="text-muted-foreground mb-6">
                A pack is just a folder with two files. Simple by design.
              </p>
              
              <div className="bg-muted/50 border border-border rounded-lg p-4 font-mono text-sm mb-6">
                <div className="text-muted-foreground">my-pack/</div>
                <div className="pl-4">├── pack.yaml</div>
                <div className="pl-4">└── SKILL.md</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">pack.yaml</h3>
                  <pre className="bg-muted/50 border border-border rounded-lg p-4 text-sm overflow-x-auto">
{`name: my-pack
version: 1.0.0
type: skill
description: One line describing what this does
author: your-username
tags:
  - relevant
  - tags
license: MIT`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Content File</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your <code className="text-xs bg-muted px-1.5 py-0.5 rounded">SKILL.md</code> or{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">CONTEXT.md</code> should include:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>When to use this pack</li>
                    <li>Clear instructions or reference material</li>
                    <li>Working examples</li>
                    <li>Common pitfalls to avoid</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Submit */}
            <section className="scroll-mt-24" id="submit">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Submit a Pack</h2>
              <p className="text-muted-foreground mb-4">
                Share your pack with the community in one command.
              </p>
              <CopyCommand command="packs submit gh:user/repo/path/to/pack" />
              <p className="text-sm text-muted-foreground mt-4">
                Or submit a pull request directly to the{" "}
                <a href="https://github.com/tunajam/packs-registry" className="text-primary hover:underline">
                  packs-registry
                </a>.
              </p>
            </section>

            <Separator className="my-10" />

            {/* Auth */}
            <section className="scroll-mt-24" id="auth">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Authentication</h2>
              <p className="text-muted-foreground mb-6">
                Authenticate with GitHub to access private repos and submit packs.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Sign in with GitHub</p>
                  <CopyCommand command="packs login" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Sign out</p>
                  <CopyCommand command="packs logout" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Check current user</p>
                  <CopyCommand command="packs whoami" />
                </div>
              </div>
            </section>

            <Separator className="my-10" />

            {/* Footer */}
            <footer className="text-sm text-muted-foreground pb-12">
              <p>
                Questions or feedback? Open an issue on{" "}
                <a href="https://github.com/tunajam/packs" className="text-primary hover:underline">
                  GitHub
                </a>{" "}
                or find us in the{" "}
                <a href="https://discord.gg/clawd" className="text-primary hover:underline">
                  Clawdbot Discord
                </a>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
