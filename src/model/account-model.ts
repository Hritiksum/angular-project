export namespace DataModales_Accounts{
    export class addAccount{
        name: string|any;
        type: string|any;
    }
    export class addAccountAttribute {
        constructor(
            public name: string,
            public type: string
        ) { }
    }
}