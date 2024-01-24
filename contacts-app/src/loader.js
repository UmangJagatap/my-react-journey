
const URL = "https://randomuser.me/api/?results=50&seed=d7567278a1f0e419&inc=name,email,id,picture,cell&nat=IN"

export async function loadContacts() {
    const result = await fetch(URL);
    return (await result.json())?.results;
} 