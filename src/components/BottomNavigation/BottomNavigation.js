import { useState } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleOnChange}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/sets"
            label="Sets"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
