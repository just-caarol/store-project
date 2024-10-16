import cls from "classnames";
import { useEffect, useRef, useState } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ErrorBoundary } from "react-error-boundary";
import Nav from "./components/nav/AppNav";
import Sidebar from "./components/sidebar/Sidebar";
import { StorageItems } from "./enums/storage";
import { ErrorBoundaryHandler } from "./ErrorHandler";
import LocalStorageContextProvider from "./hooks/localStorageContext";

export function Layout() {
  const { state } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [resetOverlay, setResetOverlay] = useState(true);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const handleHamburgerMenuClick = (ev) =>
    setIsHamburgerOpened(ev.target.checked);

  const path = window.location.pathname.slice(1);
  const mainElementRef = useRef();
  const isHome = path === "";
  const isCartView = path === "cart";

  useEffect(() => {
    if (isCartView) {
      setSidebarMenuOpen(false);
    }
  }, [path, isCartView]);

  useEffect(() => {
    const stateIsLoading = state === "loading";

    if (stateIsLoading) {
      setIsLoading(true);
    } else if (isLoading) {
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [state, isLoading]);

  return (
    <>
      <ErrorBoundary fallbackRender={ErrorBoundaryHandler}>
        <LocalStorageContextProvider storageKey={StorageItems.CartItems}>
          <div
            className={cls("main-container", "sidebar-effect", {
              "sidebar-menu-open": sidebarMenuOpen,
              "no-scroll": sidebarMenuOpen,
            })}
            ref={mainElementRef}
          >
            <div
              className={cls("page-overlay", {
                "sidebar-menu-open": sidebarMenuOpen,
                "overlay-default": !sidebarMenuOpen && resetOverlay,
              })}
              onTransitionEnd={() => setResetOverlay((prev) => !prev)}
            ></div>
            <ToastContainer
              autoClose={4000}
              draggable={false}
              hideProgressBar
              pauseOnFocusLoss
              theme="colored"
              stacked
            />
            <Nav
              isHamburgerOpened={isHamburgerOpened}
              events={{
                onToggleSidebar: setSidebarMenuOpen,
                onHamburgerClick: handleHamburgerMenuClick,
              }}
            />
            <Sidebar
              isSidebarOpen={sidebarMenuOpen}
              onToggleSidebar={setSidebarMenuOpen}
            />
            <ScrollRestoration />
            {isLoading && <div className="spinner" />}
            <div
              className={cls(`container ${isLoading ? "loading" : ""}`, {
                "mx-1rem": !isHome,
                "no-scroll": isCartView,
              })}
            >
              <Outlet />
            </div>
          </div>
        </LocalStorageContextProvider>
      </ErrorBoundary>
    </>
  );
}
