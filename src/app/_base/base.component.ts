export abstract class BaseComponent {

    loading: boolean;

    constructor() { }

    abstract load();

    async doRefresh(event: any) {
        await this.load();
        event.target.complete();
    }
}
