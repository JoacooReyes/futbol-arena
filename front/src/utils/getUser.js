export const getUsers = async() => {
    const response = await fetch('https://futbol-arena-back.onrender.com/api/users')
    const result = await response.json()
    return result
}
