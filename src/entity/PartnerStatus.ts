import {Company} from './Company';

// @Entity('PartnerStatus')
export class PartnerStatus {
    // @PrimaryColumn()
    public id: number;

    // @Column()
    public name: string;

    public priority: number;

    // @OneToMany((type) => Company, (company) => company.status)
    // public companies: Company[];
    constructor(json?: any) {
        if (typeof json === 'undefined') {
            return;
        }
        this.id = json.id;
        this.name = json.name;
        this.priority = json.priority;
    }

    public update(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.priority = json.priority;
    }
}
