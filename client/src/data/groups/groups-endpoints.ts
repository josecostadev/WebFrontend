import { GroupModel } from './models/group-models';

export interface GroupsEndpoint {
    getAll(): Promise<GroupModel[]>;
    getById(id: number): Promise<GroupModel>;
    update(group: GroupModel): Promise<GroupModel>;
    add(group: GroupModel): Promise<GroupModel>;
    remove(id: number): Promise<void>;
}
