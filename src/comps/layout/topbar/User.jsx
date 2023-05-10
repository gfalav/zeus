import React from 'react'
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { user } from '../../recoil/recoil'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../fb/fb'
import { doc, getDoc } from 'firebase/firestore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const User = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [usrDisplay, setUsrDisplay] = React.useState(null)
    const [usr, setUsr] = useRecoilState(user)

    const name = async (uid) => {
        const docRef = doc(db, 'UserAux', uid)
        const docSnap = await getDoc(docRef)
        let init = ''
        if (docSnap.exists()){
            const usuario = docSnap.data()
            if (usuario.name) {
                init = usuario.name.substring(0,1)
            }
            if (usuario.lastname) {
                init = init + usuario.lastname.substring(0,1)
            }
            setUsrDisplay(init)
        }
    }

    auth.onAuthStateChanged( (user)=> {
        if (user) {
            setUsr(user.uid)
            name(user.uid)
        } else {
            setUsr(null)
            setUsrDisplay(null)
        }
    })

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const SignOutClick = () => {
        setAnchorEl(null)
        signOut(auth).then(() => {
            //logout
        }).catch((error) => {
            console.log('SignOut Error: ', error)
        })
      }

    return(
        <Box>
            <IconButton
                onClick={handleMenu}>
                <Avatar sx={{
                    bgcolor: blue[300]
                }}>
                    { usrDisplay ?  usrDisplay : <AccountCircleIcon />}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ 
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                { !usrDisplay ? 
                <div>
                    <MenuItem component={Link} to='/auth/signin'>SignIn</MenuItem>
                    <MenuItem component={Link} to='/auth/signup'>SignUp</MenuItem>
                </div>
                :
                <div>
                <MenuItem component={Link} to='/auth/reset'>Reset</MenuItem>
                <MenuItem component={Link} to='/auth/signin' onClick={SignOutClick}>SignOut</MenuItem>
                </div>
                }
            </Menu>
        </Box>
    )
}

export default User