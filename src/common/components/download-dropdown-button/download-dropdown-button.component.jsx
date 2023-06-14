import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useRef, useState } from 'react';

export default function DownloadDropdownBtn({ text , dropdownoptions}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const dropdownToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const dropdownClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function dropdownListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={dropdownToggle}
          className="tw-flex tw-items-center tw-gap-2 tw-rounded-md tw-border-2 tw-border-solid tw-border-border-gray tw-px-4 tw-py-2 tw-font-dm tw-text-sm tw-font-semibold tw-leading-5 tw-text-text-dark-gray"
        >
          <DownloadIcon />
          {text}
          <div className="tw-inline-block tw-h-6 tw-w-[1px] tw-bg-border-gray"></div>
          <KeyboardArrowDownIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={dropdownClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={dropdownListKeyDown}
                    className='tw-p-0 tw-rounded-md'
                  >
                    {
                      dropdownoptions.map((option) => {
                        return(
                          <MenuItem className='tw-p-0' href={option.link} key={option.id} onClick={dropdownClose}>
                            <a className='tw-capitalize tw-p-3 tw-font-dm tw-text-sm tw-leading-5 tw-text-text-black' href={option.link}>{option.name}</a>
                          </MenuItem>
                        )
                      })
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
