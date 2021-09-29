import { GroupsEndpoint } from '@/data/groups/groups-endpoints';
import { GroupsService } from '@/data/groups/groups-service';
import { RootState } from '@/store/state';
import { ActionContext, ActionTree } from 'vuex';
import { Group, GroupState } from './state';

export const types = {
    LOAD_GROUPS: 'groups/loadGroups',
    ADD_GROUP: 'groups/add',
    UPDATE_GROUP: 'groups/update',
    REMOVE_GROUP: 'groups/remove'
};

export const makeActions = (groupsEndpoint: GroupsEndpoint): ActionTree<GroupState, RootState> => {
    return {
      async loadGroups({commit}): Promise<void> {
      const groups = await groupsEndpoint.getAll();
      commit('setGroups', groups);
    },
    async add(context: ActionContext<GroupState, RootState>, group: Group): Promise<void> {
      const addedGroup = await groupsEndpoint.add(group);
      context.commit('add', addedGroup);
    },
    async remove({commit}, groupId: number): Promise<void> {
      await groupsEndpoint.remove(groupId);
      commit('remove', groupId);
    },
    async update({commit}, group: Group): Promise<void> {
      const updatedGroup = await groupsEndpoint.update(group);
      commit('update', updatedGroup);
    }
  };
};
