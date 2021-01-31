import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 12},
        {id: 3, message: 'It\'s my first post', likesCount: 12},
        {id: 4, message: 'Sasha', likesCount: 12},
        {id: 5, message: 'Dimych', likesCount: 12},
    ],
}

test('Message of new post', () => {
    let action = addPostActionCreator("It Vladka");
    let newState = profileReducer(state, action);
    expect(newState.posts[5].message).toBe("It Vladka");
});

test('Length posts should be incremented', () => {
    let action = addPostActionCreator("It Vladka");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(6);
});

test('Length posts should be dicremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

test('Length posts shouldn`t be dicremented if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});


