/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { logout } from '@/provider/features/auth/auth.slice';

export default function Navbar({ setToggle, value }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const profileMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const response = await dispatch(logout());
    console.log(response, 'response');
  };

  return (
    <div className="tw-relative tw-z-10 tw-flex tw-min-h-[68px] tw-items-center tw-justify-between tw-bg-white tw-px-6 tw-py-3 tw-shadow-custom2">
      <div className="tw-flex tw-items-center">
        <MenuIcon
          onClick={() => setToggle(!value)}
          className="tw-mr-1 tw-text-2xl tw-font-bold tw-text-text-light-gray xs:tw-inline-block semixl:tw-hidden"
        />
        <h1 className="tw-font-dm tw-font-bold tw-leading-9 tw-text-text-light-gray xs:tw-text-lg lg:tw-text-2xl">
          Documents
        </h1>
      </div>

      <div className="tw-flex tw-items-center xs:tw-gap-2 lg:tw-gap-6">
        <div className="tw-relative tw-w-fit">
          <NotificationsIcon color="action" />
          <div className="tw-absolute tw-right-0 tw-top-0 tw-z-10 tw-flex tw-h-3 tw-w-3 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-font-dm tw-text-[8px] tw-text-white">
            9
          </div>
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              className="tw-m-0 tw-flex tw-items-center tw-gap-2"
            >
              <img
                className="tw-h-[36px] tw-w-[36px] tw-rounded-full tw-object-cover tw-object-center"
                src="/assets/images/profile.png"
                alt="profile image"
              />
              <div className="tw-flex tw-items-center">
                <span className="tw-font-dm tw-text-base tw-font-normal tw-leading-6 tw-text-text-dark-gray">
                  John Doe
                </span>
                <ExpandMoreIcon />
              </div>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={profileMenu}
          onClick={profileMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={profileMenu}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={profileMenu}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={profileMenu}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={profileMenu}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setToggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};
