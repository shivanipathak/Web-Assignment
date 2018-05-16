declare function getAllLectures(): Promise<{}[] | undefined>;
declare function getAllLecturesAccordingToBatches(courseid: number, batchid: number): Promise<{}[] | undefined>;
declare function getParticularLecturesAccordingToBatches(courseid: number, batchid: number, lectureid: number): Promise<{}[] | undefined>;
declare function addLecture(lecturename: string, batchid: number, subjectid: number): Promise<void>;
export { getAllLectures, addLecture, getAllLecturesAccordingToBatches, getParticularLecturesAccordingToBatches };
