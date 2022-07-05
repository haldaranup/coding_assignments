
const loadData = (key) => {
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
        
    } catch (error) {
        return undefined
    }
}


const saveData = (key, value) => {
    try {
       localStorage.setItem(key, JSON.stringify(value)) 
        
    } catch (error) {
        return undefined
    }
}

export {saveData, loadData}