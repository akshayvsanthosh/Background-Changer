import {Stack, Button } from '@mui/material';

function App() {
  
  const handleBackground=(color)=>{

    background.style.backgroundColor=color
    
  }

  return (
    
      <div id='background' className='w-100 d-flex flex-column  justify-content-center align-items-center ' style={{height:'100vh',backgroundColor:'grey'}}>
        <Stack direction="row" spacing={2}>
          <Button onClick={() =>handleBackground("red")} className='w-25 bg-danger' variant="contained">Red</Button>
          <Button onClick={() =>handleBackground("green")}  className='w-25 bg-success ' variant="contained">Green</Button>
          <Button onClick={() =>handleBackground("blue")}  className='w-25 bg-primary ' variant="contained">Blue</Button>
          <Button onClick={() =>handleBackground("yellow")}  className='w-25 bg-warning ' variant="contained">Yellow</Button>
        </Stack>
        <h5 className='mt-3 fw-bold' style={{color:'#2a2a90', fontSize:'18px'}}>Click the button to change background</h5>
      </div>
    
  )
}

export default App
