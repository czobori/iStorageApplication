export async function getAllUserData() {
    const response = await fetch('http://localhost:4550/user');
    const users = await response.json();
    return users;
}