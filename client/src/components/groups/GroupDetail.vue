<template>
    <span v-if="isInEditMode">
        <input v-if="isInEditMode" v-model="editableGroup.name" placeholder="The Group Name"/>
        <button v-on:click="save()">Save</button>
        <button v-on:click="discard()">Discard</button>
        <button v-on:click="remove()">Remove</button>
    </span>
    <div v-else>
        <span>{{group.name}}. Id={{group.id}}. RowVersion: {{group.rowVersion}} </span>
        <button v-on:click="edit()">Edit</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GroupViewModel } from './models';

@Component({
    components: {
    }
})
export default class GroupDetail extends Vue {
    @Prop() private group!: GroupViewModel;
    private isInEditMode: boolean = false;
    private editableGroup: GroupViewModel | null = null;

    public edit(): void {
        this.isInEditMode = true;
        this.editableGroup = {...this.group}; // making a copy
    }

    public save(): void {
        this.$emit('update', this.editableGroup);
        this.discard();
    }

    public remove(): void {
        this.$emit('remove', this.editableGroup!.id);
    }
    
    public discard(): void {
        this.isInEditMode = false;
        this.editableGroup = null;
    }
}
</script>
