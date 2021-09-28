<template>
  <GroupsList v-bind:groups="groups" v-on:update="updateHandler" v-on:remove="removeHandler" v-on:add="addHandler" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GroupsList from '@/components/groups/GroupsList.vue';
import { GroupViewModel } from '@/components/groups/models';
import { types } from '@/store/modules/groups/actions';
import { State, namespace } from 'vuex-class';

const groupsModule = namespace('groups');

@Component({
    components: {
      GroupsList
    }
})

export default class Groups extends Vue {

  @groupsModule.State('groups') private groups!: GroupViewModel[];
  @groupsModule.Action('loadGroups') private loadGroups!: () => void;

  public mounted(): void {
    // this.$store.dispatch(types.LOAD_GROUPS);
    this.loadGroups();
  }

  // private get groups(): GroupViewModel[] {
  //   state -> module -> state inside the module
  //   return this.$store.state.groups.groups;
  // }

  private updateHandler(group: GroupViewModel): void {
    // this.$store.commit('update', group);
    this.$store.dispatch(types.UPDATE_GROUP, group);
  }

  private removeHandler(id: number): void {
    // this.$store.commit('remove', id);
    this.$store.dispatch(types.REMOVE_GROUP, id);
  }
  
  private addHandler(group: GroupViewModel): void {
    // this.$store.commit('add', group);
    this.$store.dispatch(types.ADD_GROUP, group);
  }
}
</script>

<style lang="scss" scoped>
</style>
