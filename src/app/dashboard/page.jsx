import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';

export default function Page() {
  return (
    <Auth component={<div className="tw-p-6">Content Here</div>} type={AUTH.PRIVATE} />
  );
}
