import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      userName : credentials.userName,
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
export const showUser = (user) => {
  axios ({
    method : 'get',
    url : apiUrl + `/by_user/${user._id}`,
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    },
  })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
}

export const showAll = () => {
  axios ({
    method : 'get',
    url : apiUrl + `/mosques`,
  })
      .then(res => res.json())

      .catch(err => console.log(err))
}


