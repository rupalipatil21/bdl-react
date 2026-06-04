"use client";
import { useState } from "react";

export function useToggleState() {
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

  const handleClickToggle = (sectionId: string) => {
    setIsExpanded(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const resetToggles = () => setIsExpanded({});

  return { isExpanded, handleClickToggle, resetToggles };
}
