import { Suspense } from "react";
import VerifyOtp from "../../../components/auth/VerifyOtp";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtp />
    </Suspense>
  );
}
