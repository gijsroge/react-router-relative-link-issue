import {Link} from "@remix-run/react";

export default function Index() {
  return (
      <Link to={'..'} relative={'path'}>Should link to: /lorem</Link>
  );
}
