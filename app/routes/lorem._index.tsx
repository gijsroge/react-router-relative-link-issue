import {Link, useLocation} from "@remix-run/react";

export default function Index() {
  const {pathname} = useLocation();
  return (
      <Link to={'ipsum'}>Should link to: /lorem/ipsum</Link>
  );
}
