import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";

export default function HomePage() {
  const opts = {
    height: "390",
    width: "640"
  };

  let [yid, setYid] = useState<any>(false);

  useInterval(() => {
    if (yid) {
      if (yid.data === 1) {
        console.log(yid.target.getCurrentTime());
      } else {
        setYid(false);
      }
    }
  }, 1000);

  const _onStateChange = (event: any) => {
    setYid(event);
  };

  return (
    <div>
      <div>Inicio</div>
      <div style={{ position: "relative", height: 390, width: 640 }}>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onStateChange={_onStateChange}
        />
      </div>
    </div>
  );
}

function useInterval(callback: any, delay: any) {
  const savedCallback: any = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
