declare function getAllStudents(): Promise<{}[] | undefined>;
declare function getStudentBatches(studentid: number): Promise<{}[] | undefined>;
declare function getStudentsWithBatchID(courseid: number, batchid: number): Promise<{}[] | undefined>;
declare function getStudent(studentId: number): Promise<{}[] | undefined>;
declare function addInMappingTable(studentid: number, batchId: number): Promise<void>;
declare function addStudent(studentname: string): Promise<void>;
export { getAllStudents, getStudent, addStudent, getStudentBatches, addInMappingTable, getStudentsWithBatchID };
