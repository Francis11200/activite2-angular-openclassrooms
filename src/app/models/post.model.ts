export class Post {
    createdAt: number;

    constructor(public title: string,
                public content: string,
                public loveIts: number) {
                    this.createdAt = Date.now();
                }

}
