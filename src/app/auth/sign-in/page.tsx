import { Suspense } from "react";
import SignIn from "../../../components/auth/SignIn";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  );
}
