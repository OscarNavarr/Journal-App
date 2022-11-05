import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>

      
      {/*<NoteView/>*/}
      <NothingSelectedView/>
      
      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom:50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
      {/*<Typography>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque quis ullam libero iste cum explicabo, quod vel, ex praesentium velit tempora inventore nulla ducimus reprehenderit sapiente provident dicta illo.

      </Typography>*/}

      {/* NothingSelected */}
      {/* NoteView */}
    </JournalLayout>
 
  )
}
