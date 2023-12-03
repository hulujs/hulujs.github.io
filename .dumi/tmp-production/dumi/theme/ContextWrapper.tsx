// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/Mizi/works/hulu/demo29/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"demo","version":"1.0.0"},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"logo":"data:image/png;base64,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","title":"hulujs","footer":"Copyright © 2023 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true},
      _2_level_nav_available: false,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
