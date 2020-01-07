export function addName(myName){
    console.log(myName);
    return {
        type  :  'ADD_NAME',
        payload :  myName,
    }
}