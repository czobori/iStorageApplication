export async function getAllUserData() {
    const response = await fetch('http://localhost:4550/logindata');
    const users = await response.json();
    return users;
}
