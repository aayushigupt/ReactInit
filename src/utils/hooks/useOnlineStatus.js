import React, { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("online", () => {
        console.log("online")
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
        console.log("offline")
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
}
