import { createContext, useEffect, useReducer } from 'react'

// *** GET USER FROM LOCAL STORAGE
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const AuthContext = createContext(initialState)

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isError: null,
        isSuccess: false,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isError: null,
        isSuccess: true,
        loading: false,
      }
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isError: action.payload,
        isSuccess: false,
        loading: false,
      }
    case 'LOGOUT':
      return {
        user: null,
        isError: false,
        isSuccess: false,
        loading: false,
        message: '',
      }
    default:
      return state
  }
}

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       INITIAL_STATE,
//     },
//   };
// };

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    // if (typeof window !== "undefined") {
    localStorage.setItem('user', JSON.stringify(state.user))
    // }
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
