declare function getAllSubjects(): Promise<{}[] | undefined>;
declare function getSubject(subjectid: number): Promise<{}[] | undefined>;
declare function addSubject(subjectname: string, courseId: number): Promise<void>;
export { getAllSubjects, addSubject, getSubject };
