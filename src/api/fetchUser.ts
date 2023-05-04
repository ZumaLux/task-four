export async function fetchUser() {
  return fetch("https://randomuser.me/api").then((response) => response.json());
}

export async function fetchNextUser(num: number) {
  return fetch(`https://randomuser.me/api?page=${num}`).then((response) => response.json());
}
