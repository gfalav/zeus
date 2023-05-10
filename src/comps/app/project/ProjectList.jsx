import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { blue } from "@mui/material/colors"
import { Link } from "react-router-dom"
import { db } from "../../fb/fb"

const ProjectList = () => {
    const [projects, setProjects] = React.useState([])

    async function getProjects() {
        const q = query(collection(db, 'proyectos'), where('userId','==', ' pLuclof4gKTuww9IV3lVvKclwu12'))
        const result = await getDocs(q)
        const arrResult = result.docs.map( (doc)=> {
            return {
                id: doc.id,
                nombre: doc.data().nombre,
                description: doc.data().description,
                comitente: doc.data().comitente,
                proymanager: doc.data().proymanager,
                contratista: doc.data().contratista,
                expediente: doc.data().expediente,
                ubicacion: doc.data().ubicacion,
                fproyecto: doc.data().fproyecto,
                userId: doc.data().userId
            }
        })
        setProjects(arrResult)
    }

    React.useEffect( ()=> {
        getProjects()
    },[])

    return (
        <Box mt={5}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
                m: 2
            }}>
                <Box sx={{ flexGrow: 1}}>
                    <Typography variant="h4"><b>Projects</b></Typography>
                </Box>
                <Button component={Link} to='/project' variant="contained">New Project</Button>
            </Box>
            {
                projects.map( (p)=>{
                    return(
                        <Card key={p.id} sx={{
                            minWidth: {
                                sm: 400,
                                md: 800
                            }, 
                            m:1,
                            bgcolor: blue[100]
                        }}>
                            <CardActionArea component={Link} to={'/project/' + p.id}>
                                <CardContent>
                                    <Box sx={{
                                        p: 1
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent:'center'
                                        }}>
                                            <Typography variant="subtitle2" sx={{ pl: 2, flexGrow: 1}}>{p.expediente}</Typography>
                                            <Typography variant="subtitle2" sx={{ pr: 2}}><b>{p.fproyecto}</b></Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{pt: 0, pl: 2}}><b>{p.nombre}</b></Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent:'center'
                                        }}>
                                            <Typography sx={{ pl: 2, flexGrow: 1}}>Proyectista: {p.proymanager}</Typography>
                                            <Typography sx={{ pr: 2}}>Contratista: <b>{p.contratista}</b></Typography>
                                        </Box>
                                        <Typography variant="subtitle2" sx={{ pl: 2}}>Comitente: <b>{p.comitente}</b></Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>                        
                    )
                })
            }
            

        </Box>
    )
}

export default ProjectList