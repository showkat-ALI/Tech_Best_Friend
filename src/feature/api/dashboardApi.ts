import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        credentials: "include",
    }),
    tagTypes: ["users", "instructors", "courses", "categories", "assignment","courseModule", "quiz", "enrollment", "faqs", "lesson"],
    endpoints: (builder) => ({
        // GET ALL USERS
        getAllUsers: builder.query({
            query: () => ({ url: "/api/v1/users" }),
            providesTags: ["users"],
        }),
        // DELETE A USER BY USER ID
        deleteUser: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["users", "instructors"],
        }),
        // UPDATE A USER BY ID
        updateUser: builder.mutation({
            query: (body: { id: string, user: {} }) => ({
                url: `/api/v1/users/${body.id}`,
                method: "PATCH",
                body: body.user
            }),
            invalidatesTags: ["users", "instructors"],
        }),
        // ADD A USER
        addUser: builder.mutation({
            query: (body: {
                firstName: string
                lastName: string
                email: string
                phone: string
                roles: string
                password: string
            }) => ({
                url: `/api/v1/users`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ["users"]
        }),
        // GET ALL INSTRUCTORS
        getAllInstructors: builder.query({
            query: () => ({ url: "/api/v1/users?roles=instructor" }),
            providesTags: ["instructors"],
        }),
        //get all course
        getAllCourse: builder.query({
            query: () => ({ url: "/api/v1/courses" }),
            providesTags: ["courses"]
        }),
        // DELETE A Course
        deleteCourse: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/courses/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["courses"]
        }),
        // ACCEPT A Course
        acceptCourse: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/courses/${id}`,
                method: "PATCH",
                body: { isActive: true, status: "active" },
            }),
            invalidatesTags: ["courses"],
        }),
        //Get all categories
        getCategories: builder.query({
            query: () => ({
                url: `/api/v1/categories`,
                method: "GET"
            }),
            providesTags: ["categories"]
        }),
        // DELETE A Course Categories
        deleteCourseCategories: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/categories/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["categories"]
        }),
        //create Category
        createCategory: builder.mutation({
            query: (body: {
                name: string
            }) => ({
                url: "/api/v1/categories",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["categories"]
        }),
        // UPDATE A CATEGORY BY ID
        updateCategory: builder.mutation({
            query: (body: {
                id: string
                data: {
                    name: string
                    description: string
                }
            }) => ({
                url: `/api/v1/categories/${body.id}`,
                method: "PATCH",
                body: body.data
            }),
            invalidatesTags: ["categories"]
        }),
        // GET ALL STUDENTS
        getAllStudents: builder.query({
            query: () => ({
                url: `/api/v1/users?roles=student`,
            }),
            providesTags: ["users"]
        }),
        //create a quiz
        createQuiz: builder.mutation({
            query: (body: {
                title: string;
                category: any;
                type: string;
                attempts: number;
                scorePerQuestion: number;
                questionPerPage: number;
                isSort: boolean;
                isRequired: boolean;
                startDate: string;
                startTime: string;
                timeAllowed: string;
            }) => ({
                url: "/api/v1/quiz",
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["quiz"],
        }),
        // GET ALL ADMISSION REQUEST
        getAllAdmissionRequest: builder.query({
            query: () => ({
                url: `/api/v1/users?isActive=false&roles=student`,
            }),
            providesTags: ["users"],
        }),
        // ACCEPT STUDENT ADMISSION REQUEST
        acceptStudentAdmissionRequest: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/users/acceptStudent/${id}`,
                method: "PATCH",
                body: {
                    isActive: true,
                    status: "active",
                },
            }),
            invalidatesTags: ["users"],
        }),
        //create course
        createCourse: builder.mutation({
            query: (body: {
                title: string,
                shortDescription: string,
                category: string,
                language: string,
                durationInMinutes: number,
                price: number,
                level: string,
                featured?: boolean,
                numberOfLectures: number,
                discountPrice: number,
                isDiscount?: boolean,
                description: string,
                courseImage: string,
                videoUrl: string,
            }) => ({
                url: "/api/v1/courses",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["courses"]
        }),

        // UPDATE A course BY ID
        updateCourse: builder.mutation({
            query: (body: {
                id: string,
                isPublished: boolean,
                messageToReviewer: string,
                tags: string[],
                title: string,
                shortDescription: string,
                category: string,
                language: string,
                durationInMinutes: number,
                price: number,
                level: string,
                featured?: boolean,
                numberOfLectures: number,
                discountPrice: number,
                isDiscount?: boolean,
                description: string,
                courseImage: string,
                videoUrl: string,
            }) => ({
                url: `/api/v1/courses/${body.id}`,
                method: "PATCH",
                body: body
            }),
            invalidatesTags: ["courses"],
        }),
        // GET ALL COURSE REQUEST
        getAllCourseRequest: builder.query({
            query: () => ({
                url: "/api/v1/courses?isActive=false",
                method: "GET",
            }),
            providesTags: ["courses"],
        }),
        // GET ALL ACTIVE COURSE
        getAllActiveCourse: builder.query({
            query: () => ({
                url: "/api/v1/courses?isActive=true",
                method: "GET",
            }),
        }),
        //create assignment
        createAssignment: builder.mutation({
            query: (body: {
                name: string,
                description: string,
                fileUrl: string,
                comment: string,
                score: number,
                submissionAttempts: string,
                availFrom: string,
                availUntil: string,
                key: string
            }) => ({
                url: "/api/v1/assignments",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["assignment"]
        }),
        //Get all assignment
        getAssignment: builder.query({
            query: () => ({
                url: `/api/v1/assignments`,
                method: "GET"
            }),
            providesTags: ["assignment"]
        }),
        //create course Module
        createModuleCourse: builder.mutation({
            query: (body: {
                name: string;
                course: string
            }) => ({
                url: "/api/v1/modules",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["courseModule"]
        }),
        //Get  course module
        getCourseModule: builder.query({
            query: (id: string) => ({
                url: `/api/v1/modules?course=${id}`,
                method: "GET"
            }),
            providesTags: ["courseModule"]
        }),
        // UPDATE A module BY ID
        updateModule: builder.mutation({
            query: (body: {
                id: string
                assignments: any;
            }) => {
                console.log(body)
                return {
                    url: `/api/v1/modules/${body.id}`,
                    method: "PATCH",
                    body: body
                }
            },
            invalidatesTags: ["courseModule"]
        }),
         // UPDATE A module BY ID
         updateModuleName: builder.mutation({
             query: (body: {
                 id: string
                 name: any
             }) => {
                 console.log(body)
                 return {
                     url: `/api/v1/modules/${body.id}`,
                     method: "PATCH",
                     body: body
                 }
             },
             invalidatesTags: ["courseModule"]
         }),
           // DELETE A Module
        deleteModule: builder.mutation({
            query: (id: string) => ({
                url: `/api/v1/modules/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["courseModule"]
        }),
        // UPDATE A module BY ID Video
        updateVideoModule: builder.mutation({
            query: (body: {
                module: string
                topicName: string;
                localVideo: string;
                youtubeVideo: string;
                minutes: number;
                second: number;
                key: string
            }) => {
                console.log(body)
                return {
                    url: `/api/v1/videos`,
                    method: "POST",
                    body: body
                }
            },
            invalidatesTags: ["courseModule"]
        }),
        //Get all assignment
        getQuiz: builder.query({
            query: () => ({
                url: `/api/v1/quiz`,
                method: "GET"
            }),

        }),
        // UPDATE A module BY ID
        updateModuleQuiz: builder.mutation({
            query: (body: {
                id: string
                quizzes: any
            }) => {
                console.log(body)
                return {
                    url: `/api/v1/modules/${body.id}`,
                    method: "PATCH",
                    body: body
                }
            },
            invalidatesTags: ["courseModule"]
        }),
        //create slide
        createSlide: builder.mutation({
            query: (body: {
                title: string,
                fileUrl: string,
                key: string,
                module: string
            }) => ({
                url: "/api/v1/slides",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["courseModule"]
        }),

        // ENROLL IN COURSE
        enroll: builder.mutation({
            query: (id: string) => ({
                url: "/api/v1/enrollments",
                method: "POST",
                body: { course: id }
            }),
        }),
        //Get my enrollmentsall course
        getMyEnrollmentAll: builder.query({
            query: () => ({
                url: `/api/v1/enrollments/myEnroll/mine`,
                method: "GET"
            }),
            providesTags: ["enrollment"]
        }),
        //Get  course enrollment
        getEnrollment: builder.query({
            query: (id: string) => ({
                url: `/api/v1/enrollments/${id}`,
                method: "GET"
            }),
            providesTags: ["enrollment"]
        }),

        //create course querstion
        createQuestionCourse: builder.mutation({
            query: (body: {
                name: string,
                email: string,
                question: string,
                course: string
            }) => ({
                url: "/api/v1/courseQuestions",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["enrollment"]
        }),
        //create course faqs
        createFaqs: builder.mutation({
            query: (body: {
                answer: string,
                question: string,
                course: string
            }) => ({
                url: "/api/v1/faqs",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["faqs"]
        }),
        //Get  faqs 
        getFaqs: builder.query({
            query: (id: string) => ({
                url: `/api/v1/faqs?course=${id}`,
                method: "GET"
            }),
            providesTags: ["faqs"]
        }),
        //Get  faqs 
        getAllLessonCourse: builder.query({
            query: (id: string) => ({
                url: `/api/v1/videos?course=${id}`,
                method: "GET"
            }),
            providesTags: ["lesson"]
        }),
         //assignment submit
         submitAssignment: builder.mutation({
            query: (body: {
                course: any,
                assignment: any,
                text: string,
                fileUrl: string[],
                comment: string,
            }) => ({
                url: "/api/v1/subAssignments",
                method: "POST",
                body: body
            }),
            invalidatesTags: ["assignment"]
        }),
         //Get  all submit assignment 
         getAllSubmitAssignment: builder.query({
            query: () => ({
                url: `/api/v1/subAssignments`,
                method: "GET"
            }),
            providesTags: ["assignment"]
        }),
         //Get  one submit assignment 
         getOneSubmitAssignment: builder.query({
            query: (id:string) => ({
                url: `/api/v1/subAssignments/${id}`,
                method: "GET"
            }),
            providesTags: ["assignment"]
        }),
          //create quiz querstion
          createQuizQuestion: builder.mutation({
            query: (body: {
                quiz: string,
                question: string,
                answers: any,
            }) => ({
                url: "/api/v1/questions",
                method: "POST",
                body: body
            }),
            invalidatesTags: []
        }),
        //Get one quiz
        getOneQuiz: builder.query({
            query: (quiz:any) => ({
                url: `/api/v1/quiz/${quiz}`,
                method: "GET"
            }),
            providesTags: ["quiz"]
        }),
         //create quiz querstion
         submitQuiz: builder.mutation({
            query: (body: {
                quiz: any,
                course: any,
                answers: string[],
            }) => ({
                url: "/api/v1/subQuizzes",
                method: "POST",
                body: body
            }),
            invalidatesTags: []
        }),
          // GET ALL active course by gatecory
          getCourseByCategory: builder.query({
            query: (id:any) => ({
                url: `/api/v1/courses?isActive=true${id}`,
                method: "GET",
            }),
        }),
         // GET single active course by gatecory
         getSingleCourse: builder.query({
            query: (id:any) => ({
                url: `/api/v1/courses/${id}`,
                method: "GET",
            }),
        }),
         // GET popular course
         getPopularCourse: builder.query({
            query: () => ({
                url: `/api/v1/courses?sort=-totalEnroll&limit=3`,
                method: "GET",
            }),
        }),
    }),
});

export default dashboardApi;

export const {
    useGetPopularCourseQuery,
    useGetAllUsersQuery,
    useGetSingleCourseQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation,
    useGetAllInstructorsQuery,
    useGetAllCourseQuery,
    useGetAllActiveCourseQuery,
    useDeleteCourseMutation,
    useAcceptCourseMutation,
    useGetCategoriesQuery,
    useDeleteCourseCategoriesMutation,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useGetAllStudentsQuery,
    useCreateCourseMutation,
    useGetAllAdmissionRequestQuery,
    useAcceptStudentAdmissionRequestMutation,
    useCreateQuizMutation,
    useGetAllCourseRequestQuery,
    useCreateAssignmentMutation,
    useCreateModuleCourseMutation,
    useGetCourseModuleQuery,
    useGetAssignmentQuery,
    useUpdateModuleMutation,
    useUpdateVideoModuleMutation,
    useGetQuizQuery,
    useUpdateModuleQuizMutation,
    useCreateSlideMutation,
    useEnrollMutation,
    useUpdateCourseMutation,
    useGetMyEnrollmentAllQuery,
    useGetEnrollmentQuery,
    useCreateQuestionCourseMutation,
    useCreateFaqsMutation,
    useGetFaqsQuery,
    useGetAllLessonCourseQuery,
    useSubmitAssignmentMutation,
    useCreateQuizQuestionMutation,
    useGetAllSubmitAssignmentQuery,
    useGetOneSubmitAssignmentQuery,
    useGetOneQuizQuery,
    useSubmitQuizMutation,
    useUpdateModuleNameMutation,
    useDeleteModuleMutation,
    useGetCourseByCategoryQuery
} = dashboardApi;