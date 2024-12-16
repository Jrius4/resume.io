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
                website: 'https://coopprofiler.com/',
                image: './images/coopprofiler.png',
            },

            {
                id: 2,
                client: 'Trail Analytics',
                company: 'Trail Analytics',
                type: 'Website, App and Mobile',
                stack: 'Backend: Laravel (PHP), MSQL,Frontend: Vue(Javascript) and Mobile: Flutter(Dart)',
                year: '2021',
                name: 'UNICEF, Digital Operations Platform',
                description:
                    'Steamline UNICEF Standard Of Procedure in regards of their day to day tasks.\n Contain Approval Signing of Documents',
                website: 'https://dop.ssddigitalops.org/',
                image: "./images/dop.png",
            },
            {
                id: 3,
                client: 'Fromyfarm',
                company: 'Fromyfarm',
                type: 'Mobile App',
                stack: 'Backend: ExpressJs, MongoDB, Mobile: React Native (Javascript)',
                year: '2023',
                name: 'fromyfarm',
                description:
                    'Linking Farmers to the global Market',
                website: 'https://fromyfarm.app/',
                image: './images/fromyfarm.png',
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