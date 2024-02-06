
const URL = "https://randomuser.me/api/?results=50&seed=d7567278a1f0e419&inc=name,email,id,picture,cell,location&nat=IN"

export async function loadContacts() {
    const result = await fetch(URL);
    return (await result.json())?.results;
}

export async function loadContact(contactId) {
    const contacts = await loadContacts();
    return (contacts.find(contact => contact.id.value === contactId));
} 