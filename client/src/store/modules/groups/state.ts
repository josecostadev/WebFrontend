export interface Group {
    id: number;
    name: string;
    rowVersion: string;
}

export interface GroupState {
    groups: Group[];
}
