<template>
  <GroupsList v-bind:groups="groups" v-on:update="updateHandler" v-on:remove="removeHandler" v-on:add="addHandler" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GroupsList from '@/components/groups/GroupsList.vue';
import { GroupViewModel } from '@/components/groups/models';

@Component({
    components: {
      GroupsList
    }
})

export default class Groups extends Vue {

    private currentId: number = 0;
    private groups: GroupViewModel[] = [
      {id: ++this.currentId, name: 'Group 1', rowVersion: 'a'},
      {id: ++this.currentId, name: 'Group 2', rowVersion: 'b'},
      {id: ++this.currentId, name: 'Group 3', rowVersion: 'c'}
    ];

    private updateHandler(group: GroupViewModel): void {
        const index = this.groups.findIndex((g) => g.id === group.id);
        this.groups = [...this.groups.slice(0, index), group, ...this.groups.slice(index + 1, this.groups.length)];
    }

    private removeHandler(id: number): void {
        this.groups = this.groups.filter((g) => g.id !== id);
    }
    
    private addHandler(group: GroupViewModel): void {
        group.id = ++this.currentId;
        this.groups = [...this.groups, group];
    }
}
</script>

<style lang="scss" scoped>
</style>
