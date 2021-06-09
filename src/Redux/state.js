import { rerender } from "../rerender";

let state = 
{
    profilePage:{
        postData : [
        {id: 0, postMessage: "Hello World!", likeCount: 15},
        {id: 1, postMessage: "Jopa", likeCount: 20},
        {id: 2, postMessage: "Call Props", likeCount: 30},
      ]},
    dialogPage:{
        dialogData : [
            {id: 0, name: "Dima"},
            {id: 1, name: "VASYA"},
            {id: 2, name: "VITA"}
          ],
          messageData : [
            {id: 0, messageText: "JOPA"},
            {id: 1, messageText: "HI"},
            {id: 2, messageText: "Hello"}
          ],
          imgData: [
            {id:0, imgsrc: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg"},
            {id:1 , imgsrc: "https://cs16planet.ru/steam-avatars/images/avatar3219.jpg"},
            {id:2, imgsrc: "https://i.pinimg.com/736x/aa/84/50/aa8450e3ac91d46b0a07de544bd63823.jpg"}
          ]
        }
        
}
export let addPost = (text) =>{
    let newPost = {
        id: 5, postMessage: text, likeCount:0
    }
    state.profilePage.postData.push(newPost);
    rerender(state);
}

export default state;



