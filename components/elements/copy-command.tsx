"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyCommandProps {
  command: string;
}

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-3 bg-muted border border-border px-4 py-2 text-sm font-mono hover:border-primary transition-colors cursor-pointer"
    >
      <code>{command}</code>
      {copied ? (
        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </button>
  );
}
