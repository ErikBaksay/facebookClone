export interface post {

    id : number;
    timePosted : number;
    userID : number;
    photo : string|null;
    text : string|null;
    numberOfLikes : number;
    numberOfComments : number;
    numberOfShares : number,
    comments : string[]|null;
}