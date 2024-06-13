"use client";

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult
} from "@hello-pangea/dnd"

import { cn } from "@/lib/utils";

interface ChaptersListProps {
  items: Chapter[];
  onReorder: (updatedata: { id: string; position: number }) => void;
  onEdit: (id: string) => void;
}

export default function ChaptersList({
  items,
  onReorder,
  onEdit,
}: ChaptersListProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setChapters(items);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <></>;
}
