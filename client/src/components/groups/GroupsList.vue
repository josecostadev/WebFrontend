<template>
    <div>
        <ul>
            <li v-for="group in groups" v-bind:key="group.id">
                <GroupDetail v-bind:group="group" v-on:update="updateHandler" v-on:remove="removeHandler" />
            </li>
        </ul>
        <CreateGroup v-on:add="addHandler" />
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GroupDetail from './GroupDetail.vue';
import CreateGroup from './CreateGroup.vue';
import { GroupViewModel } from './models';

@Component({
    components: {
        GroupDetail,
        CreateGroup
    }
})

export default class GroupsList extends Vue {
    @Prop() private groups!: GroupViewModel[];

    private updateHandler(group: GroupViewModel): void {
        this.$emit('update', group);
    }

    private removeHandler(id: number): void {
        this.$emit('remove', id);
    }
    
    private addHandler(group: GroupViewModel): void {
        this.$emit('add', group);
    }
}
</script>
