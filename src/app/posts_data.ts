import { post } from './post_interface';

export var posts_data : post[] = [
    {
        id : 1,
        timePosted : 0,
        userID : 3,
        photo : './assets/images/posts/1.jpg',
        text : "See what happens if you don’t give up",
        numberOfLikes : 85,
        numberOfComments : 0,
        numberOfShares : 1,
        comments : null,
    },
    {
        id : 2,
        timePosted : 0,
        userID : 2,
        photo : './assets/images/posts/2.jpg',
        text : "Adventure begins at the end of roads you know",
        numberOfLikes : 234,
        numberOfComments : 0,
        numberOfShares : 32,
        comments : null,
    },
    {
        id : 3,
        timePosted : 0,
        userID : 6,
        photo : './assets/images/posts/3.jpg',
        text : "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it. -Ferris Bueller’s Day Off",
        numberOfLikes : 140,
        numberOfComments : 0,
        numberOfShares : 0,
        comments : null,
    }
]