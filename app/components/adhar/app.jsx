
import React, { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  const [useTestAadhaar, setUseTestAadhaar] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider _useTestAadhaar={useTestAadhaar}>
          <Component
            {...pageProps}
            setUseTestAadhaar={setUseTestAadhaar}
            useTestAadhaar={useTestAadhaar}
          />
        </AnonAadhaarProvider>
      ) : null}
    </>
  );
}
