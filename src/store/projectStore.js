import { defineStore } from "pinia";

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: [
            {
                id: 1,
                client: 'Trail Analytics',
                company: 'Trail Analytics',
                type: 'Survey, Research',
                year: '2022',
                name: 'Cooprofiler',
                stack: 'Backend: Laravel (PHP), MSQL,Frontend: Vue(Javascript) and Mobile App: Flutter(Dart)',
                description:
                    'Generate resilient score, reporting for cooperatives',
                website: 'cooprofiler.com',
                image: '/images/001.jpg',
            },
            {
                id: 2,
                client: 'Trail Analytics',
                company: 'Trail Analytics',
                type: 'Website, App',
                year: '2022',
                stack: 'Backend: Laravel (PHP), MSQL,Frontend: Vue(Javascript) and Flutter(Dart)',
                name: 'Trail Analytics',
                description:
                    'Analyze your trail data, identify trends, and optimize your operations',
                website: 'trailanalytics.com',
                image: '/images/002.jpg',
            },
            {
                id: 3,
                client: 'Trail Analytics',
                company: 'Trail Analytics',
                type: 'Website, App and Mobile',
                stack: 'Backend: Laravel (PHP), MSQL,Frontend: Vue(Javascript) and Mobile: Flutter(Dart)',
                year: '2021',
                name: 'UNICEF, Digital Operations Platform',
                description:
                    'Steamline UNICEF Standard Of Procedure in regards of their day to day tasks.\n Contain Approval Signing of Documents',
                website: 'trailanalytics.com',
                image: '/images/003.jpg',
            }
        ],
    }),

    getters: {
        getProjectById: state => (id) => {
            console.log({ id })
            let filteredProject = state.projects.filter(project => project.id === parseInt(id));
            if (filteredProject.length > 0) {
                return filteredProject[0];
            } else {
                return null
            }

        },
    },

    actions: {
        addProject({ commit }, project) {
            commit('addProject', project);
        },
    },

    mutations: {
        addProject(state, project) {
            state.projects.push(project);
        },
    },
});