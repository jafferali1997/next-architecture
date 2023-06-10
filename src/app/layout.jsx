import '@/common/styles/dashboard/dashboard.style.css';
import '@/common/styles/globals.style.css';
import '@/common/styles/home.style.scss';
import 'react-phone-input-2/lib/style.css';
import { Inter } from 'next/font/google';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import styled from '@emotion/styled';
import store from '@/provider/store';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Quick Steps',
//   description: 'Custom invoices generating app'
// };

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: 'rgb(222 255 228)',
    color: 'green'
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: 'rgb(255 222 222)',
    color: 'red'
  }
}));

/**
 * It is a root wrapper for all pages
 * @param {children} props
 * @returns page component with html wrapped around it
 */
export default function RootLayout({ children }) {
  // const action = (snackbarId) => (
  //   <button
  //     onClick={() => {
  //       closeSnackbar(snackbarId);
  //     }}
  //   >
  //     X
  //   </button>
  // );
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={1500}
            Components={{
              success: StyledMaterialDesignContent,
              error: StyledMaterialDesignContent
            }}
          >
            <Provider store={store}>{children}</Provider>
          </SnackbarProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.element.isRequired
};
