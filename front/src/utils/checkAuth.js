export function checkAuth(){
    const user = JSON.parse(localStorage.getItem('usuario'))
    const token = localStorage.getItem('token')
    if(user && token){ 
        return true
    }else{
        return false
    }
}