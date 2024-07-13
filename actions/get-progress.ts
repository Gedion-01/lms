import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    // Get all published chapters
    const publishedChapters = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });

    // Get all published chapter ids
    const publishedChapterId = publishedChapters.map((chapter) => chapter.id);

    // Get all completed chapters
    const validCompletedChapters = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterId,
        },
        isCompleted: true,
      },
    });

    const progressPercentage =
      (validCompletedChapters / publishedChapters.length) * 100;

    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
};
