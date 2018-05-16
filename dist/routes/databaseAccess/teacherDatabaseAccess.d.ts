declare function getAllTeachers(): Promise<{}[] | undefined>;
declare function getParticularTeacher(teacherid: number): Promise<{}[] | undefined>;
declare function teachersFromBatches(teacherid: number): Promise<{}[]>;
declare function getTeachersAccordingToBatches(courseid: number, batchid: number): Promise<{}[] | undefined>;
declare function getTeachersAccordingToSubject(subjectid: number): Promise<{}[] | undefined>;
declare function addTeacher(teachername: string, subjectId: number): Promise<void>;
export { getAllTeachers, addTeacher, getParticularTeacher, getTeachersAccordingToBatches, getTeachersAccordingToSubject, teachersFromBatches };
