export const setToken = (token: string) => {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    console.warn('Invalid token provided')
    return false
  }

  if (typeof window === 'undefined') {
    console.warn('Cannot set token: not in browser environment')
    return false
  }

  try {
    localStorage.setItem('token', token.trim())
    return true
  } catch (error) {
    console.error('Failed to store token:', error)
    return false
  }
}

export const getToken = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const token = localStorage.getItem('token')
    
    if (!token || token.trim() === '') {
      return null
    }
    
    return token.trim()
  } catch (error) {
    console.error('Failed to retrieve token:', error)
    clearToken()
    return null
  }
}

export const clearToken = (): void => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.removeItem('token')
  } catch (error) {
    console.error('Failed to clear token:', error)
  }
}

export const isAuthenticated = (): boolean => {
  const token = getToken()
  return token !== null && token !== ''
}
