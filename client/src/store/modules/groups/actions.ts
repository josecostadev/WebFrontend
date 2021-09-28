import { RootState } from '@/store/state';
import { ActionContext, ActionTree } from 'vuex';
import { Group, GroupState } from './state';

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove'
};

export const actions: ActionTree<GroupState, RootState> = {
    loadGroups({commit}): void {
      // TODO: Make API request before committing to the store
      const groups = [
        {id: 1, name: 'Group 11', rowVersion: 'a'},
        {id: 2, name: 'Group 22', rowVersion: 'b'},
        {id: 3, name: 'Group 33', rowVersion: 'c'}
      ];
      commit('setGroups', groups);
    },
    add(context: ActionContext<GroupState, RootState>, group: Group): void {
      // TODO: Make API request before committing to the store
      context.commit('add', group);
    },
    remove({commit}, groupId: number): void {
      // TODO: Make API request before committing to the store
      commit('remove', groupId);
    },
    update({commit}, group: Group): void {
      // TODO: Make API request before committing to the store
      commit('update', group);
    }
  };
