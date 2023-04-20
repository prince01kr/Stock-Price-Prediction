import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Stock = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100vw",
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <TextField label="Stock Name" variant="outlined" />
        <TextField label="Start Date" variant="outlined" />
        <TextField label="End Date" variant="outlined" />
        <Button variant="contained">Predict</Button>
        
      </Box>

    </>
  )
}

export default Stock