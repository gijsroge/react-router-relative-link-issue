import {Link, useLocation} from "@remix-run/react";

export default function Index() {
  const {pathname} = useLocation();
  return (
      <Link to={'test'}>Should link to: {pathname}<strong>/test</strong></Link>
  );
}
