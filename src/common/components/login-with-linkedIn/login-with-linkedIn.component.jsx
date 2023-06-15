'use client';

import axios from 'axios';
import { LinkedIn } from 'react-linkedin-login-oauth2';

const clientId = '78g01gnf1wpbnd';
const clientSecret = '2oyG6kJWM60eSDeO';
const redirectUri = `${typeof window === 'object' && window.location.origin}/linkedin`;

function LoginWithLinkedIn() {
  return (
    <LinkedIn
      clientId="78g01gnf1wpbnd"
      redirectUri={`${typeof window === 'object' && window.location.origin}/linkedin`}
      scope="r_emailaddress r_liteprofile"
      onSuccess={(code) => {
        console.log('Success', code);
        const data = new URLSearchParams();
        data.append('grant_type', 'authorization_code');
        data.append('code', code);
        data.append('redirect_uri', redirectUri);
        data.append('client_id', clientId);
        data.append('client_secret', clientSecret);
        axios
          .post('https://www.linkedin.com/oauth/v2/accessToken', data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then((response) => {
            console.log(response.data);
            const accessToken = response.data.access_token;
            console.log(`Access token: ${accessToken}`);
            axios
              .get(`https://api.linkedin.com/v2/me?oauth2_access_token=${accessToken}`)
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          })
          .catch((error) => {
            console.error(error);
          });
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <button onClick={linkedInLogin} className="login-provider-btn" type="button">
          <img src="/assets/images/linkedin-icon.svg" alt="login with Linkedin" />
        </button>
      )}
    </LinkedIn>
  );
}

export default LoginWithLinkedIn;
