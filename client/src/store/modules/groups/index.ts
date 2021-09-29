import { RootState } from '@/store/state';
import { Module } from 'vuex';
import { GroupState } from './state';
import { makeActions } from './actions';
import { mutations } from './mutations';
import { GroupsService } from '@/data/groups/groups-service';

export const groups: Module<GroupState, RootState> = {
    namespaced: true,
    actions: makeActions(new GroupsService()), // maybe not best place to create it
    mutations: mutations,
    state: {
        groups: []
    }
};
