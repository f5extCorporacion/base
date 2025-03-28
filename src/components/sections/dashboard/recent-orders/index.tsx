import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from './DataTable';

const RecentOrders = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Paper sx={{     minHeight: { xs: 700, sm: 700 }, // Aumenta la altura mínima
    display: 'flex',
    flexDirection: 'column', // Asegura que el contenido se expanda correctamente
    overflow: 'hidden',}}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        mt={-0.4}
        spacing={1.5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" color="text.secondary">
          
        </Typography>

        <TextField
          variant="filled"
          size="small"
          placeholder="Search here"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 1, maxWidth: { xs: 260, sm: 240 } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="prime:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={{ xs: 1.5, sm: 0.75 }} height={505} flex={1}>
        <DataTable searchText={searchText} />
      </Box>
    </Paper>
  );
};

export default RecentOrders;
