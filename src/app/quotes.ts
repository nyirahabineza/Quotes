export class Quote{
    public showDescription:boolean;
    constructor(public person:string, public author:string,public description:string,public upvote:number=0,public downvote:number=0,public completeDate:Date){
        this.showDescription=false;

    }
}
