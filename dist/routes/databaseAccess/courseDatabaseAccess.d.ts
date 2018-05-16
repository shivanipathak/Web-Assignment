declare function getAllCourses(): Promise<{}[] | undefined>;
declare function getCourses(id: number): Promise<{}[] | undefined>;
declare function addCourse(coursename: string): Promise<void>;
export { getAllCourses, getCourses, addCourse };
