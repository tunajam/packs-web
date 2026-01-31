import { CopyCommand } from "@/components/elements/copy-command";

export default function DocsPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-muted-foreground hover:text-primary text-sm mb-8 block">
          ← Back
        </a>
        
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-muted-foreground mb-12">
          Everything you need to get started with packs.
        </p>

        {/* Install */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="install">Install</h2>
          <CopyCommand command="brew install tunajam/tap/packs" />
          <p className="text-muted-foreground text-sm mt-3">
            Requires Homebrew. macOS and Linux supported.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="usage">Usage</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Browse packs</h3>
              <CopyCommand command="packs" />
              <p className="text-muted-foreground text-sm mt-2">
                Opens an interactive TUI to explore available packs.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Search</h3>
              <CopyCommand command="packs find <query>" />
              <p className="text-muted-foreground text-sm mt-2">
                Search for packs by name, description, or tags.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Install a pack</h3>
              <CopyCommand command="packs get <name>" />
              <p className="text-muted-foreground text-sm mt-2">
                Fetches the pack and outputs its content. Pipe to a file or use directly.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Pack info</h3>
              <CopyCommand command="packs info <name>" />
              <p className="text-muted-foreground text-sm mt-2">
                View details about a specific pack.
              </p>
            </div>
          </div>
        </section>

        {/* Fetch from GitHub */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="github">Fetch from GitHub</h2>
          <p className="text-muted-foreground mb-4">
            Install packs directly from any GitHub repo:
          </p>
          <CopyCommand command="packs get gh:user/repo/path/to/pack" />
          <p className="text-muted-foreground text-sm mt-3">
            Works with private repos if you&apos;re authenticated with <code className="text-xs bg-muted px-1 py-0.5">packs login</code>.
          </p>
        </section>

        {/* Pack Types */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="types">Pack Types</h2>
          <div className="space-y-4">
            <div className="border border-border p-4">
              <h3 className="font-medium mb-1">Skills</h3>
              <p className="text-muted-foreground text-sm">
                Step-by-step workflows and processes. &quot;How to debug systematically&quot;, &quot;How to write good commit messages&quot;.
              </p>
            </div>
            <div className="border border-border p-4">
              <h3 className="font-medium mb-1">Contexts</h3>
              <p className="text-muted-foreground text-sm">
                Reference material and best practices. &quot;React Query patterns&quot;, &quot;TypeScript conventions&quot;.
              </p>
            </div>
            <div className="border border-border p-4">
              <h3 className="font-medium mb-1">Prompts</h3>
              <p className="text-muted-foreground text-sm">
                Reusable prompt templates for specific tasks.
              </p>
            </div>
          </div>
        </section>

        {/* Creating Packs */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="create">Creating Packs</h2>
          <p className="text-muted-foreground mb-4">
            A pack is a folder with two files:
          </p>
          
          <div className="bg-muted p-4 font-mono text-sm mb-4">
            <div>my-pack/</div>
            <div className="pl-4">├── pack.yaml</div>
            <div className="pl-4">└── SKILL.md</div>
          </div>

          <h3 className="text-sm font-medium mb-2">pack.yaml</h3>
          <pre className="bg-muted p-4 text-sm overflow-x-auto mb-4">
{`name: my-pack
version: 1.0.0
type: skill
description: Short description of what this does
author: your-username
tags:
  - tag1
  - tag2
license: MIT`}
          </pre>

          <h3 className="text-sm font-medium mb-2">SKILL.md</h3>
          <p className="text-muted-foreground text-sm mb-4">
            The actual content. Markdown format. Include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mb-4">
            <li>When to use this skill</li>
            <li>Step-by-step instructions</li>
            <li>Examples and templates</li>
            <li>Common pitfalls</li>
          </ul>
        </section>

        {/* Submit */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="submit">Submit a Pack</h2>
          <p className="text-muted-foreground mb-4">
            Share your pack with the community:
          </p>
          <CopyCommand command="packs submit gh:user/repo/path/to/pack" />
          <p className="text-muted-foreground text-sm mt-3">
            Or submit a PR directly to{" "}
            <a href="https://github.com/tunajam/packs-registry" className="text-primary hover:underline">
              packs-registry
            </a>.
          </p>
        </section>

        {/* Auth */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4" id="auth">Authentication</h2>
          <div className="space-y-4">
            <div>
              <CopyCommand command="packs login" />
              <p className="text-muted-foreground text-sm mt-2">
                Authenticate with GitHub for private repos and submissions.
              </p>
            </div>
            <div>
              <CopyCommand command="packs logout" />
            </div>
            <div>
              <CopyCommand command="packs whoami" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-16 text-muted-foreground text-sm">
          <p>
            Questions? Open an issue on{" "}
            <a href="https://github.com/tunajam/packs" className="text-primary hover:underline">
              GitHub
            </a>{" "}
            or find us in the{" "}
            <a href="https://discord.gg/clawd" className="text-primary hover:underline">
              Clawdbot Discord
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
