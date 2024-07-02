"use client"

import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

interface CourseSidebarItemProps {
    label: string;
    id: string;
    isCompleted: boolean;
    courseId: string;
    isLocked: string;
}

export function CourseSidebarItem({
    label,
    id,
    isCompleted,
    courseId,
    isLocked
}: CourseSidebarItemProps) {
    const pathname = usePathname();
    const router = useRouter();

    const Icon  = isLocked ? Lock : (isCompleted ? CheckCircle : PlayCircle);
    const isActive = pathname?.includes(id);

    const onClick = () => {
        router.push(`/courses/${courseId}/${id}`)
    }
    return (
        <div>Course sidebar item</div>
    )
}