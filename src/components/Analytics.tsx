"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { COOKIE_CONSENT_KEY } from "./CookieConsent";

export function Analytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check initial stored preference
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted") {
      setHasConsent(true);
    }

    // Listen for real-time consent updates from CookieConsent banner
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail === "accepted") {
        setHasConsent(true);
      } else {
        setHasConsent(false);
      }
    };

    window.addEventListener("cookie_consent_changed", handleConsentChange);
    return () => {
      window.removeEventListener("cookie_consent_changed", handleConsentChange);
    };
  }, []);

  // Strict privacy: if user has not accepted or rejected, load nothing
  if (!hasConsent) {
    return null;
  }

  return (
    <Script
      strategy="afterInteractive"
      data-domain="shujaahmed.dev"
      src="https://plausible.io/js/script.js"
    />
  );
}
