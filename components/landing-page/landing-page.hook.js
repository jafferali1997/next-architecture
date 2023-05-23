import { useRouter } from "next/navigation";
import { useState } from "react";

const LandingPageHook = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  return {
    open,
    setOpen,
    auth,
    setAuth,
    router,
  };

  // useEffect(() => {
  //   const accessToken = getAccessToken();
  //   if (accessToken) {
  //     // router.push('/offers/create');
  //     setAuth(true);
  //   }
  // }, []);
  // const handleToggle = () => {
  //   setOpen(!open);
  // };
  // const logoutHandle = () => {
  //   removeAccessToken();
  //   setAuth(false);
  //   router.push('/');
  // };
  // const handleClick = () => {
  //   router.push('/sign-up');
  // };
};

export default LandingPageHook;
