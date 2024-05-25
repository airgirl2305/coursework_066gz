let user = {};
let users = [];

export function getUser(user_id) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id === user_id) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://a0986163.xsph.ru/getUsers");
  users = await response.json();
  return users;
}

//*  DONE
let content = [];
export async function getContent() {
  let response = await fetch("http://a0986163.xsph.ru/getContent");
  content = await response.json();
  return content;
}

//*  DONE
let openedContent = {};
export async function getOpenedContent(content_id) {
  for (let i = 0; i < Object.keys(content).length; i++) {
    if (content[i].id === content_id) return content[i];
  }
  return openedContent;
}

//*  DONE
let favoriteContent = [];
export async function getFavorite() {
  let response = await fetch("http://a0986163.xsph.ru/getFavorite");
  favoriteContent = await response.json();
  return favoriteContent;
}
