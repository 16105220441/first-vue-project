const HISTORY_KEY = 'history_list'

export const getHistoryList = () => {
    const result = localStorage.getItem(HISTORY_KEY)
    return result ? JSON.parse(result) : []
}

export const setHistoryList = (historyList) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(historyList))
}