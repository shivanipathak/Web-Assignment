declare function getAllBatches(): Promise<{}[] | undefined>;
declare function getAllBatchesAccordingToCourse(courseId: number): Promise<{}[]>;
declare function getBatchesAccordingToCourse(courseId: number, batchId: number): Promise<{}[]>;
declare function addBatch(batchname: string, courseId: number): Promise<void>;
export { getAllBatchesAccordingToCourse, getAllBatches, getBatchesAccordingToCourse, addBatch };
