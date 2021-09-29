import { MutationTree } from 'vuex';
import { Group, GroupState } from './state';

export const mutations: MutationTree<GroupState> = {
    setGroups(state, groups: Group[]) {
      state.groups = groups;
    },
    add(state: GroupState, group: Group): void {
      state.groups = [...state.groups, group];      
    },
    remove(state: GroupState, groupId: number): void {
      state.groups = state.groups.filter((g) => g.id !== groupId);  
    },
    update(state: GroupState, group: Group): void {
      const index = state.groups.findIndex((g) => g.id === group.id);
      state.groups = [...state.groups.slice(0, index), group, ...state.groups.slice(index + 1, state.groups.length)];
    }
  };
