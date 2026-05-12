import React from "react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  text: string | React.ReactNode;
  badgeText?: string;
  showBadge?: boolean;
  className?: string;
}

export function TrustBadge({ 
  text, 
  badgeText, 
  showBadge = true, 
  className 
}: TrustBadgeProps) {
  // Only render if we have text
  if (!text) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-5 py-2.5 bg-card border border-border rounded-full shadow-sm mb-10 transition-all hover:border-primary/30 animate-fade-in",
        className
      )}
    >
      {showBadge && badgeText && (
        <div className="flex">
          <div className="w-7 h-7 rounded-full border-2 border-card bg-primary text-white flex items-center justify-center text-[10px] font-black uppercase tracking-tighter shadow-sm">
            {badgeText.substring(0, 3)}
          </div>
        </div>
      )}
      <div className="text-sm font-bold text-text/70 tracking-tight uppercase italic">
        {text}
      </div>
    </div>
  );
}

