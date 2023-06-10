import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import Customer from '@/components/customer/customer.component';

export default function Page() {
  return <Auth component={<Customer />} type={AUTH.PRIVATE} />;
}
