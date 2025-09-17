import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const context = useContext(UserContext)

    // If context is undefined (e.g., UserContext.Provider is missing)
    if (!context || !context.user) {
        return <div>Please login</div>
    }

    const { user } = context

    return <div>Welcome {user.username || "User"}</div>
}

export default Profile
